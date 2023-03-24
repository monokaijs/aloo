import React, { useEffect, useRef, useState } from "react";
import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import { getSize } from "@utils/reponsive.utils";
import { View } from "react-native";
import { CreateMeetingForm } from "@components/app/CreateMeetingForm";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { CustomBottomSheet } from "@components/layouts/CustomBottomSheet";
import { setAppSheets } from "@redux/slices/app.slice";

export const CreateMeetingSheet = () => {
  const dispatch = useAppDispatch();
  const {sheets: {createMeeting}} = useAppSelector(state => state.app);
  const [contentHeight, setContentHeight] = useState(300);
  const sheetRef = useRef<BottomSheet>(null);

  const renderBackdrop = (propsBD: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...propsBD}
      disappearsOnIndex={-1}
      appearsOnIndex={1}
      pressBehavior={"close"}
    />
  );

  return (
    <CustomBottomSheet
      visible={createMeeting}
      ref={sheetRef}
      index={1}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      snapPoints={[1, contentHeight + getSize.m(24)]}
      contentHeight={contentHeight}
      onClose={() => {
        dispatch(setAppSheets({
          createMeeting: false
        }))
      }}
    >
      <View
        onLayout={({ nativeEvent }) => {
          setContentHeight(nativeEvent.layout.height);
        }}
      >
        <CreateMeetingForm />
      </View>
    </CustomBottomSheet>
  );
};
