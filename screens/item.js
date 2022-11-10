import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
function item(props) {
  const [categories, setCategory] = useState([
    {
      name: 'Happy',
      url: 'https://i.pinimg.com/564x/b9/fa/66/b9fa66712bbad8a11566bc882ca3f470.jpg',
    },
    {
      name: 'Birth',
      url: 'https://i.pinimg.com/236x/fc/cd/dd/fccddddffbd14e09af6231c9ba7d5389.jpg',
    },
    {
      name: 'Day',
      url: 'https://i.pinimg.com/236x/f6/02/a7/f602a7075cc27939392ce04abc630eba.jpg',
    },
    {
      name: 'For',
      url: 'https://i.pinimg.com/236x/d9/00/b8/d900b8ec66eb61edb37ed203acebe2c7.jpg',
    },
    {
      name: 'Me',
      url: 'https://i.pinimg.com/236x/1d/85/a6/1d85a6c73cc4e1055e65bc8d50af6807.jpg',
    },
    {
      name: 'ANTi',
      url: 'https://i.pinimg.com/236x/f3/91/98/f39198f20982e31e857aecb6713ce86c.jpg',
    },
    {
      name: 'Ok',
      url: 'https://i.pinimg.com/736x/6c/88/31/6c8831fcc657af248091fce6de00046f.jpg',
    },
    {
      name: 'La',
      url: 'https://i.pinimg.com/564x/b0/d9/0f/b0d90fb91348fc505b97fdc8c9081447.jpg',
    },
  ]);
  const [foods, setFoods] = useState([
    {
      name: 'Rasgulla',
      price: 6522,
      url: 'https://i.pinimg.com/736x/33/eb/01/33eb0186dfb456c464a39ae52c9dd98e.jpg',
    },
    {
      name: 'Dal tadka Rasgulla',
      price: 3555,
      url: 'https://i.pinimg.com/736x/dc/7b/b8/dc7bb81fd86aeb6c968c184929829401.jpg',
    },
    {
      name: 'Pongal Rasgulla ',
      price: 1244,
      url: 'https://i.pinimg.com/564x/48/46/97/48469747874d3dc541a7615daae58348.jpg',
    },
    {
      name: 'Misal Rasgulla',
      price: 5877,
      url: 'https://i.pinimg.com/236x/cc/55/86/cc558622491f91a0be99a2ab7faa56ea.jpg',
    },
    {
      name: 'Kulfi Rasg',
      price: 6999,

      url: 'https://i.pinimg.com/236x/b4/87/c8/b487c88e6c6869234f2a78545eb07976.jpg',
    },
    {
      name: 'Pakora Rasgull',
      price: 3500,

      url: 'https://i.pinimg.com/236x/5e/e2/0f/5ee20f0dca9d08411e87cc5f4a6def53.jpg',
    },
    {
      name: 'Papadum Rasg',
      price: 1000,

      url: 'https://i.pinimg.com/236x/23/71/0c/23710ca080e22e200a76aa02a1d8e44b.jpg',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 30,
          flexDirection: 'column',
          paddingBottom: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 20, width: 20, marginTop:'20'}}
            source={{
              uri: 'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png',
            }}></Image>
          <View style={{flex: 1, alignContent: 'center', paddingLeft: 150}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>IcYYY</Text>
          </View>
          <Image
            style={{height: 20, width: 20}}
            source={{
              uri: 'https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/bag-icon.png',
            }}></Image>
        </View>
        <Image
          style={{
            height: 200,
            width: '100%',
            padding: 30,
            borderRadius: 20,
            marginVertical: 20,
          }}
          source={{
            uri: 'https://i.pinimg.com/564x/e4/1b/68/e41b6833c70961f8dfaac47ecbf78906.jpg',
          }}></Image>
      </View>
      <View style={{flex: 40}}>
        <FlatList
          horizontal={true}
          data={categories}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  alert(`name is: ${item.name}`);
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    margin: 10,
                  }}
                  source={{
                    uri: item.url,
                  }}
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          }}></FlatList>
        <FlatList
          horizontal={true}
          data={foods}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  alert(`name is: ${item.name}`);
                }}
                style={{
                  justifyContent: 'center',
                  paddingLeft: 10,
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 150,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    margin: 10,
                  }}
                  source={{
                    uri: item.url,
                  }}
                />
                <Text>{item.name}</Text>
                <Text style={{fontSize: 12}}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text>{item.price}</Text>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: 'cover',
                      borderRadius: 10,
                      marginLeft: 40,
                    }}
                    source={{
                      uri: 'https://i.pinimg.com/originals/8a/3c/7f/8a3c7fbd4d9532a244ef3d5027d6e4c6.jpg',
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
      <View style={{flex: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 20, width: 20}}
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png',
            }}></Image>

          <View style={{flex: 1, alignContent: 'center', paddingLeft: 50}}>
            <Image
              style={{height: 20, width: 20}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/214/214309.png',
              }}></Image>
          </View>
          <View style={{flex: 1, alignContent: 'center', paddingLeft: 20}}>
            <Image
              style={{
                height: 50,
                width: 50,
                position: 'absolute',
                marginTop: -20,
              }}
              source={{
                uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAA+VBMVEWQyvj///8mMDaV0f+SzfwjLjSW0v8eKTAXJCsAFyAAEx0kLTIaJi0AFR8hKS2MyPgQHycADRmHxvgTISgqNDoaHh4eJCbFx8gKGyQZHBuhpKbh4uPQ0dLw8fH4+PhzeHtPVlrc3d7R6Py9v8A1PkOUl5ljaWzp6upASE1/g4YABBRokK90oMLAwsOkp6n1+v7l8v1/sNaxs7WIjI6LwOp/rM9WXGBIYXQTFRKu2Po9UF6Qu92BpcJVc4onKikzNzdhg541RVFUboE4Q0tMYXB0l7JulrZriqPs9f4yQUxFU13H4/u12/pccYBCWmyIr81VZXCCnLFtgI5FFohXAAAQmklEQVR4nN2de1ubShDGIUAI5CKYQIjGXGoSo1V7TKL12Gqt9dL2nLaefv8PcyBRdhaWZSEQoO8ffXoxkF9nd2Z29sbxaai3297fmfcvBtPRqFVqjUbTi8nhfDw76R70UnlhsLiEn7fX3jkctCzV0po1WZak0kqSJMu1imYpemU0Ge/vJvxWipIEHJ5Oarqi1eRXLKIkuWmp6sX45CDBVwcrKcDd04msanQ0KLliKdNxN6G3U5QIYHc+0pvscK4tK3VlMttL4hsEa33A7qFUr0SGcy2pKRezNB3PmoAH45Fai033wmhZ/fTa6lqA7YneXJNupVq9dZqSGdcAnI1UOQm6pSRNO0zFrcYF7I11jdF4rDauHE2GSaKtFA+wN9Y02netVhumaRimrUapVao6v1n+sVGl4crqReKdMRbgjhXc9Ww0w/hydX37eHa24ITySoLILc7O397eXbU6ho0ZiKhPEs5yYgDOpCDrVU2jcXV7fMaJguiIg1r+jSBw3Pnb629mIKSs9hONjJEBu9M60XrVhmHevz3jBC+YTzZmeXF8/bljN1+SaspOdoB7fZ3kOW260fW5A0dnw+y5eHzfIDNqrXZGgDOtQvg+Nt3tWZkdzoUUuOP3HZPQViW9n1RYjAJ4MFD8rbNqNu7OI5jOx/h4ZRDMWGnubxxwpvhbZ6Pz5dFumfHoXhnPrg2/GZMyIjNgb6IS2ub9eXktuhdE8e3I8CFWmkn0RFbArlzzW+9usZ7xAKN4/M2HKOnjjQGOj7y9L0m8JaJw/M30vsS6WLuZMgH2JpbnzVXjZ6J4S0TxbdX0vKcmDTcAeDDyBgfjSxJ9z4/I3Xo9qqTOUgfser1n4+Yhaeu9Sli873i6onqYMuBMx3uG1HlepITnqHzc8rRTa5Iq4I7uMV/1Yzk9PM7pitcG/l/aHKzhasIA557o17nnUjTfSsJ5Fe+JtWl8whDAwzr2pqr5kK75VhK59wb2XrkVewhFBzxUsPeYozR7H5TwFvc1cituwYYK6OEz7uLm1DEIz1pYM5XlmDakAc5xvs6TsCk8zmmmnzFvGreVUgDHmH+pmueb5HO8Kd4R5VEsTxMMeIrFh0ZrU90PqXyLEdYGiQKe4HxfNs/nuJpL+CWacSJ+EODwCOP7nn70IxIeYza0YmRtAYB72GSY+T0TvCUhZkP1NCnAkYzxbda9YITnmA31yJVvMmC/CdvnVVb2WxIed8B3kbSowYIIeKpifNnZz08oTxMAHEIHWh1liucQPkJCLaKjIQG2gIOp3mQRHzyEWDw8OlkXsA8LFDcfMuezI/41yNqkZqRu6Afchx3w8mMO+Oy07Qpk3nKkjMYHuAfL8wZDfr21tb29vbWVMmILjJ4izT75ACegwNu4D+fbLr/5+u7rm7+3U+UTz2A3VCIMDr2AsIEyONAt7q+XD37lUjUi5kqjNFIPYA8u6TFCHcxW+R36bDlVwvJ70A3r7MVSD+Ah8KDGQ1gD3fobfvZdyv1whLqhVGMeG+KAQ9BAwzsgzsfz/6RKKJ6BRlphDvc44BTk2DeLiHz8u3QdjXALoqE+jAO4D4qERlgE9PHZvTBVQE78jBqpfBEHEORooQ2UwMf/nW4vFM/A4FBnnB2FgKdgkswIaaAkvrQBOeEaeVKJcVgBAcHiM/OJ3kCJfHy6eI5gqGBbpQAAd9ACpuqI3kC3yqRnfU3XydgS36KERhpFBZSQATvHVANuce9Iz0q7hTqE35CfUZjGTQgQ9MDqd7o/3CLyvUndgDYgKNGwDe4RIDTgGdWA23+RnvTXBvjsjO0KmVBlqUC5gPtoIqJxTzXg9j/Z8WH5DFMsdAEHKIm5pCbZZAe6ifa5lPATedIjhrWlr4Cg0NR4prlQsgP9Z1N8mAlZMtJXwD4a5xrUHrhNcjCb48N6oVQJH1S8APZQD6S70O03hIdsrH06EsF8hRU+LnwBnKEgT82yiR1wo3xYLGSIFC+AyMWEJDHZ89npDBo26aHVmdU3PkAuhpqFkiJg+gmaT8jNNEPXI64Ad9Bki0kZRpAaaNqFCoKEOzdShI8pVoBTN4uhBnlSipZuMY0omK+FjuyXgLuoFENzMSQPuoEE2y/gZkLb6BIQDJRugh9LCvGbDIBI4i1qo2GDpiXghetDGz+CfSjBw2woAfUKZjNqiB91AHvAhwa3UJKH2SQVlIDaqBYybe8AtlEaYwY/lJCjZdIBHYmogiiHrC1xAOduObsanGdv/ev77KYjPBKci2mGA6IgYT4EtlC/ATOIgK5EVOGs04e9NuAeqlV0PgQ9kWDAzBooh8X6Jn22kINdsDqKYMCMPOhK4iNrJ7QBx26eFhwkCAbcKJBX4sINFFItDHDiRsHgLuiPgelOJYUKdkJq4cIGBEPBwGKMLwvN0sM4EtB8qEUtcXNwqGQEJtpb3s/9mzEgiIQVajrKQR8zCI6CHgumPBUYLjCioHsZjj91m2jjR7AT9fTBrA3IcQvXgvR8m+MP3XoaJcx7EtHMDWh3QrdjlXRabY0D5RjjnDIW/Ao/lWWMf5Hw08231SEVcOT62w6tWgHLTdkloUgimgxVaJO9XM/tgtIn2gPBlFk2o1yPQG2NOmLiUJSoTqlzLltb/y4R36S74IdV4jFbnOC6KEqErjvY3irbnLnggyOmWp8G2HbHEo3fuVg6ySqUjVKn0ThUtA9beJA3uRakBkIO1XwpYTCXcuOg1KIBjt16BaXglEeh4qgk0wDnbiJj/CoUoIDmCWnThNzhHwBI2y0CASmZWg4FcjXaEmeuj1JR+uKRvOnPB0Rjelr5HgLmYQ8Iu2IAFsyCaMFMnQYInEzRANn6YHHDBAK0aGHiTwj0tO1aBU7V0BJ12i6K4ibbqLYtlYL5ijxcYqsbcid/wICXtlcLlCxoCxDyJ1CyoJa2ObRGJmyldr4EFh1W5jTAPdeC0qhQgGgKlDrHy/HokGHaMrXcCRR+qfNnHFiCUKhsG+Ta9SEVEEzwFinSl9EUr07bd87BKfoiBcIFWq4mUfhswH0UCKnL7fMlGCWo2yc4uK31pjhuFMy9UKOEswgBnf0TtmkwRwIrgTTq0nsOW8lVHC8D1sRSnagDiIa8BcpGUSZa0qi7Qzi4Z6Ka4dlG0QRmB0P2TnD4iu2idEKwm5fuY5bLKUvF64QCOhbBom8EdQAnYMl2MQDFBVoQq9LPz3EAZ2AdQjEiIYiCYSeTOIBwtVox8m04dRaycWK5/AUtlSlIoABBQgnZyLsERKvSpZAN9PkQaKGSRudbAXbRIR2FaKNgEyh1CYkLyMugjebfhNCHUpdxIUCUrRVhRAEWw4bv4l0Bdtm2n+VEAspMQlvo6xZXNP6nLPvNieAu5ZBdIQgQ1S1Knby7GTBvRl0hgwGChDvvBW5s31L4lSKv61zBSQ85L4+CsXzo5kEACM/qyHc2s0AHO7Gc1uGuVAanrVC2uWYveK5TneHgKhcQuBkzz8EebSegrzL0Ae6BQ/FCz4zLTtCADCdZwBOBwLGG+c3XwK6zkIq2H/AAmPAyryYEUy4ljekcVbAdAhwpk9ciPnaAo8V0QiUAPADH23fyuWZGAKcbMgR5DyDshfkszsCDVhgNiAGC3cr5DBUgRDD2QM/plCAW5nFoD0/BZXOhXkAeXGsdstEnA4nw0HuF9ZRfHBCeoGr+l7NGuoh1mLjnkCYwqMjbwBCeGMd+Aq4XcBdcVFDN1boZAZy8WWqyX1ngPWZrDm5Jrv3IDyEW4iWZ/YYi3zliI3iSeI66ITzs3opw+6kPsAuv68lNrCjDDliqRbhUw38SHGyk0qd8ZN3YEdtOkKBPetIBsRt7GoM8dEP82hdHKvMFtgRA7MqX2nP2hOL5ZckrnfUGJtJhhafw1jrjd9aE4pnvfl6HkPGubOK1RBN464vxlC2huKgS7jtnvmOKCNiD9/aUOpkSiosWka8ksWUz5JuzdrGr3bIkDORzZpZYbkYJuPtsX88HIYWP8drMoOv5xtj1rVkRUvnYLpUMvGCxr8FHGZkM8MVFg8bnXNAbH5CfwBvsSibDDUVJSzg36XylUiV0doJyyemgBh9lbvwSSeHRH9990sKuzaQA9qYYYePTZjNv4dqbnxEVdm0m7R7eHnaPZKlqpHzNN5TI/TSDmHCFpKXUm5T3cMJSZ2Npm/ciZSohNS2l34W9N8Jaqd0RN3IboVh+MsLcC5BOq7CF3Gbu6YcleRPNVFxcGQEsAYSUEX7YffS9QRN/mPGctjctPzaYm+dKEuVcrjBAOx5a+NMaNx/TDIni4mc08y0JlcADHMMB+UPV8zTjeZEWoig8mBHNt/pOlaC0lAGQ39E9A86GPUZMpZ0KZ5+jm28puRWQlrIA8t2m7Hme+em/5BGFxV0U5+kh/LIGIL831TzPqxrTX8kiCty1Ead1virgNnc2QJ6fe5upjTj4JSSFKAqL21idD4h8mzsrIL+veJupY8WPiVhRLC+u18WzpZHWVjID8nsDxffIqvHpabGuGUXx/L6zPl6JXA9mB7S96ZHPiCXJvPlhd8bYjLbxnr4Q+p5kKYRaYZhU/7x2FED+YEB6a8M244dYjHbPe7i/JI1qK5X93TiER760NBKgs0mmQnis1DCmv3+VhSiQok33eH9DHLPLet+Oal2d8E9h0r07mSIC8r1D3d9OV4w3zw8fmCBF0W6Y57ffL8mORVKmq5ru/hHpn0N05KkHRwXk+eFADWg7DdNoPT+dL0Sbksxp/7UgiIvj6+mNEVRP0mS3mZ3GsKFkDdcE5PmTUWD3kGzIy9H974dfHxblsmBLXMn+Xbm8+PDx6e672TGDi2VNBQ7Qx2rQz1EINaweHAfQ7ooti+IBpKqNaZhV6cv3u7trR3c/fjxPSzemYVLYHDxrjqeUhxblpwMkSzDxjgfoIPoDv0/VagMpNMuUtPrYNyboe3NEFkJYD44LaCNO1XDECN9Kae2QBgQXJLcdIpiWxge0/fjkqBkjVhEkVfRB0Hyfp2jCJFAPXgfQTt92RmqM93skK7X5MPAdnuIlm1A9eD1AW92+otTWsKNsqRP6NuODOI9368FrA9pq92W1Eqc/ShWlPpmFzhDt0lx2kOrj5ABtdccDS/GN+6lwNU0ZzdtMS5ZiJW0viXdCgLZ67fFFXdUqcuh/t8Omj/ozlgnaldqx0tJZsoBLDWfzqaQqNiaBU5LlimaplWl/p8swNws1i0N41E4ecKmD9mzeH7RUXVcVRbEsy/5VVXW1NejPT9u77AvpgHbiJG3OVctpAL6qd7A77LbbJ+12tzuMx4U099cTwgmV3VQBk1WcpE2SDooD6JlTZ9PRfoEAPXPqLAa03UyRAKMmbZKVspNJXHtSFEJZdqacCgXIH0QYvdRay1hbLEB+WGclrExXcalggHybsdKmvY4IiwboWSYYJMudpigcIL/DQKijSYriAfLj0KTtCKycKSBgWC1RwtbNFBGQnrRJKrZqppCA/CC4lihp+OREMQH5aVBKI9c8K2YKCrjXIhPWRt5SQUEBA5K21/QFqKiAxFpik7DAubCA+D7ApSzSOpLiAvInnpSmTlzcXGBAzwSwTl7aXGRAbAI4aL9doQFR0iYdBc2+FRuQ76+SNin4EM6CA64mgOXmMPAHig7oTADLJdrNWZv7Kumo19J86RlU4QH5gwl11uN/j7yjKSNzpLkAAAAASUVORK5CYII=',
              }}></Image>
          </View>
          <View style={{flex: 1, alignContent: 'center', paddingLeft: 50}}>
            <Image
              style={{height: 20, width: 20}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
              }}></Image>
          </View>
          <Image
            style={{height: 20, width: 20}}
            source={{
              uri: 'https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/bag-icon.png',
            }}></Image>
        </View>
      </View>
    </View>
  );
}

export default item;
