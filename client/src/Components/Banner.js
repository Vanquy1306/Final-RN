import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";
const { width } = Dimensions.get("window");

export default function Banner() {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    setBannerData([
      "https://static.vecteezy.com/system/resources/previews/002/198/999/non_2x/online-concept-coffee-shop-delivery-on-mobile-food-and-drink-order-application-vector.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKTiuOEnD7ItECNnT_lNyBIVAOXvgs09sEA&usqp=CAU",
      "https://static.vecteezy.com/system/resources/previews/001/234/147/non_2x/coffee-shop-delivery-on-mobile-vector.jpg",
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showButtons={false}
            autoplay={true}
            autoplayTimeout={10}
            style={{ height: width / 2 }}
          >
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.image}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
  },
  swiper: {
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
