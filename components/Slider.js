import React, { forwardRef, memo } from "react";
import { FlatList } from "react-native";

const Slider = forwardRef(
  ({ data, index, onIndexChange, width, ...props }, ref) => {
    const onScroll = (e) => {
      if (index === undefined) {
        return;
      }

      const offset = e.nativeEvent.contentOffset.x;
      const newIndex = Math.round(offset / width);
      if (newIndex === index || newIndex > data.length - 1 || newIndex < 0) {
        return;
      }

      onIndexChange(newIndex);
    };

    const getItemLayout = (_, idx) => ({
      length: width,
      offset: width * idx,
      index: idx,
    });

    return (
      data?.length > 0 && (
        <FlatList
          ref={ref}
          data={data}
          initialScrollIndex={index}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          snapToAlignment="center"
          decelerationRate="fast"
          disableIntervalMomentum
          bounces={false}
          onScroll={onScroll}
          getItemLayout={getItemLayout}
          {...props}
        />
      )
    );
  },
);

export default memo(Slider);
