import React, {forwardRef, useEffect, useState, useCallback} from 'react';
import BottomSheet, {
  BottomSheetProps,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {BackHandler} from 'react-native';
import {getSize} from '@utils/reponsive.utils';

interface CustomBottomSheetProps extends BottomSheetProps {
  visible: boolean;
  onClose: () => any;
}

const ActualSheet = forwardRef((props: CustomBottomSheetProps, ref: any) => {
  const renderBackdrop = useCallback(
    (propsBD: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...propsBD}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
        pressBehavior={'close'}
      />
    ),
    [],
  );

  return (
    <BottomSheet
      ref={ref}
      index={1}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      backgroundStyle={{
        backgroundColor: 'white',
      }}
      {...props}>
      {props.children}
    </BottomSheet>
  );
});

let backHandler: any;
export const CustomBottomSheet = forwardRef(
  (props: CustomBottomSheetProps, ref: any) => {
    const {visible} = props;
    const [currentVisible, setCurrentVisible] = useState(false);

    useEffect(() => {
      if (!currentVisible && ref) {
        return ref.current?.close();
      }
    }, [currentVisible, ref]);

    useEffect(() => {
      setCurrentVisible(visible);
    }, [visible]);

    useEffect(() => {
      if (visible) {
        backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
          props.onClose && props.onClose();
          return true;
        });
      }
      if (!visible) {
        backHandler?.remove();
      }
    }, [visible]);

    return currentVisible ? (
      <ActualSheet
        ref={ref}
        onChange={index => {
          if (index === 0) {
            ref?.current?.close();
          }
          props.onChange && props.onChange(index);
        }}
        handleIndicatorStyle={{
          width: getSize.m(40),
          backgroundColor: '#CACBCD',
          height: getSize.m(2),
        }}
        {...props}
        onClose={() => {
          props.onClose && props.onClose();
          setCurrentVisible(false);
        }}>
        {props.children}
      </ActualSheet>
    ) : (
      <></>
    );
  },
);
