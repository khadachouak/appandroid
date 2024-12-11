// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Modal, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome'; 

// const Home = ({ onLogout }) => {
//   const [selectedFood, setSelectedFood] = useState(null);
//   const [cartItems, setCartItems] = useState([]); 
//   const [isCartVisible, setIsCartVisible] = useState(false); 

//   const foodMenuItems = [
//     { 
//       id: '1', 
//       title: 'Pizza', 
//       price: '$12.99', 
//       image: 'https://img.cuisineaz.com/1280x720/2018/02/28/i136025-pizza-legere.jpeg',
//       description: "Savor the rich flavors of our pizza, topped with gooey cheese and fresh herbs. Each bite is a delicious reminder of Italy—crispy, cheesy, and utterly irresistible!"
//     },
//     { 
//       id: '2', 
//       title: 'Burger', 
//       price: '$9.99', 
//       image: 'https://ffcuisine.fr/wp-content/uploads/2024/06/1718492522_recette-facile-de-chicken-burger-gourmand-et-rapide.jpg',
//       description: "Treat yourself to our juicy burger, grilled to perfection and bursting with flavor. It's the perfect bite that will leave you craving more!"
//     },
//     { 
//       id: '3', 
//       title: 'Pasta', 
//       price: '$11.99', 
//       image: 'https://www.realfoodwithsarah.com/wp-content/uploads/2024/05/authentic-italian-pasta-sauce-3.jpg',
//       description: "Experience the taste of Italy with our creamy pasta, made with fresh ingredients. It's a delightful dish that you simply can't miss!"
//     },
//     { 
//       id: '4', 
//       title: 'Salad', 
//       price: '$7.99', 
//       image: 'https://www.foodandwine.com/thmb/IuZPWAXBp4YaT9hn1YLHhuijT3k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-big-italian-salad-hero-83e6ea846722478f8feb1eea33158b00.jpg',
//       description: "Enjoy a refreshing salad, loaded with crisp greens and zesty dressing. It's a healthy choice that’s as delicious as it is vibrant!"
//     },
//     { 
//       id: '5', 
//       title: 'Ice Cream', 
//       price: '$4.99', 
//       image: 'https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg',
//       description: "Indulge in our rich, creamy ice cream, a sweet treat that's sure to satisfy your cravings. It's the perfect dessert for any occasion!"
//     },
//   ];

//   const handleAddToCart = (item) => {
//     const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

//     if (existingItemIndex > -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingItemIndex].quantity++;
//       setCartItems(updatedCartItems);
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }

//     console.log(`${item.title} added to cart`);
//   };

//   const handleRemoveFromCart = (item) => {
//     const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

//     if (existingItemIndex > -1) {
//       const updatedCartItems = [...cartItems];
//       if (updatedCartItems[existingItemIndex].quantity > 1) {
//         updatedCartItems[existingItemIndex].quantity--;
//       } else {
//         updatedCartItems.splice(existingItemIndex, 1);
//       }
//       setCartItems(updatedCartItems);
//     }
//   };

//   const handleDeleteCartItem = (itemId) => {
//     Alert.alert(
//       "Confirm Delete",
//       "Are you sure you want to remove this food from your cart?",
//       [
//         {
//           text: "Cancel", 
//           style: "cancel"
//         },
//         { 
//           text: "Delete", 
//           onPress: () => setCartItems(cartItems.filter(item => item.id !== itemId)) 
//         }
//       ]
//     );
//   };


//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => setSelectedFood(item)}>
//       <View style={styles.menuItem}>
//         <Image source={{ uri: item.image }} style={styles.foodImage} />
//         <View style={styles.textContainer}>
//           <Text style={styles.menuText}>{item.title}</Text>
//           <Text style={styles.priceText}>{item.price}</Text>
//           <Text style={styles.descriptionText}>{item.description}</Text>
//           <View style={styles.quantityContainer}>
//             <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={styles.quantityButton}>
//               <Text style={styles.quantityButtonText}>-</Text>
//             </TouchableOpacity>
//             <Text style={styles.quantityText}>{cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 0}</Text>
//             <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.quantityButton}>
//               <Text style={styles.quantityButtonText}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );

//   const renderCartItem = ({ item }) => (
//     <View style={styles.cartItem}>
//       <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteCartItem(item.id)}>
//         <Text style={styles.deleteButtonText}>X</Text>
//       </TouchableOpacity>
//       <Image source={{ uri: item.image }} style={styles.cartItemImage} />
//       <Text style={styles.cartItemText}>
//         {item.title} - {item.price} x {item.quantity} 
//       </Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header with Title and Basket Icon */}
//       <View style={styles.header}>
//         <Text style={styles.menuTitle}>Welcome to Fast Bites!</Text>
//         <View style={styles.basketContainer}>
//           <TouchableOpacity onPress={() => setIsCartVisible(true)}>
//             <Icon name="shopping-basket" size={30} color="#5D4037" />
//           </TouchableOpacity>
//           {cartItems.length > 0 && <View style={styles.notificationDot} />}
//         </View>
//       </View>

//       {selectedFood ? (
//         <View style={styles.detailContainer}>
//           <TouchableOpacity style={styles.backButton} onPress={() => setSelectedFood(null)}>
//             <Text style={styles.backButtonText}>Back</Text>
//           </TouchableOpacity>
//           <Image source={{ uri: selectedFood.image }} style={styles.detailImage} />
//           <Text style={styles.detailTitle}>{selectedFood.title}</Text>
//           <Text style={styles.detailPrice}>{selectedFood.price}</Text>
//           <Text style={styles.detailDescription}>{selectedFood.description}</Text>
//           <View style={styles.quantityContainer}>
//             <TouchableOpacity onPress={() => handleRemoveFromCart(selectedFood)} style={styles.quantityButton}>
//               <Text style={styles.quantityButtonText}>-</Text>
//             </TouchableOpacity>
//             <Text style={styles.quantityText}>{cartItems.find(cartItem => cartItem.id === selectedFood.id)?.quantity || 0}</Text>
//             <TouchableOpacity onPress={() => handleAddToCart(selectedFood)} style={styles.quantityButton}>
//               <Text style={styles.quantityButtonText}>+</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       ) : (
//         <>
//           <FlatList
//             data={foodMenuItems}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id}
//             style={styles.menuList}
//           />
//           <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
//             <Text style={styles.logoutButtonText}>Logout</Text>
//           </TouchableOpacity>
//         </>
//       )}

//       {/* Modal for displaying cart items */}
//       <Modal
//         visible={isCartVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setIsCartVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <View style={styles.modalHeader}> 
//               <Text style={styles.modalTitle}>Cart Items</Text>
//               <TouchableOpacity style={styles.closeButton} onPress={() => setIsCartVisible(false)}> 
//                 <Text style={styles.closeButtonText}>X</Text>
//               </TouchableOpacity>
//             </View>
//             <FlatList
//               data={cartItems}
//               renderItem={renderCartItem}
//               keyExtractor={(item) => item.id}
//             />
//             <View style={styles.totalContainer}>
//               <Text style={styles.totalText}>
//                 Total: ${cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')) * item.quantity, 0).toFixed(2)}
//               </Text>
//             </View>
//             <TouchableOpacity 
//   style={styles.paymentButton} 
//   onPress={() => {
//     if (cartItems.length === 0) {
//       Alert.alert(
//         "Cart is empty", 
//         "You have to add something to your cart", 
//         [
//           {
//             text: "OK", 
//             onPress: () => setIsCartVisible(false) 
//           }
//         ]
//       );
//     } else {
//       Alert.alert(
//         "Confirm Purchase",
//         "Are you sure that you want to buy this?",
//         [
//           {
//             text: "Cancel",
//             style: "cancel"
//           },
//           {
//             text: "Confirm",
//             onPress: () => {
//               Alert.alert( 
//                 "Success", 
//                 "Payment Successful!" 
//               );
//               setIsCartVisible(false);
//               setCartItems([]);
//             }
//           }
//         ]
//       );
//     }
//   }}>
//   <Text style={styles.paymentButtonText}>Payment</Text> 
// </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#FFE135',
//   },
//   header: {
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//     marginTop: 30,
//   },
//   basketContainer: {
//     position: 'relative',
//   },
//   notificationDot: {
//     position: 'absolute',
//     top: -4,
//     right: -4,
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'red',
//   },
//   menuTitle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#D32F2F',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   menuList: {
//     marginBottom: 20,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowOffset: { width: 0, height: 4 },
//     shadowRadius: 6,
//     elevation: 8,
//     marginBottom: 15,
//   },
//   foodImage: {
//     width: 90,
//     height: 90,
//     borderRadius: 15,
//     borderWidth: 2,
//     borderColor: '#FFD700',
//     marginRight: 15,
//   },
//   textContainer: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   menuText: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: '#333',
//   },
//   descriptionText: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 5,
//   },
//   priceText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#FF5733',
//     marginTop: 5,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   quantityButton: {
//     backgroundColor: '#D32F2F',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   quantityButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   quantityText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginHorizontal: 10,
//   },
//   logoutButton: {
//     backgroundColor: '#D32F2F',
//     padding: 10,
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   logoutButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   detailContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   backButton: {
//     marginBottom: 15,
//     padding: 10,
//     backgroundColor: '#D32F2F',
//     borderRadius: 5,
//   },
//   backButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   detailImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 15,
//     marginBottom: 15,
//   },
//   detailTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#D32F2F',
//   },
//   detailPrice: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#FF5733',
//   },
//   detailDescription: {
//     fontSize: 16,
//     color: '#666',
//     marginVertical: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: '80%',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//   },
//   modalTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   cartItem: {
//     flexDirection: 'row', 
//     alignItems: 'center',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     position: 'relative', 
//   },
//   cartItemImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   cartItemText: {
//     fontSize: 18,
//   },
//   totalContainer: {
//     marginTop: 15,
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     paddingTop: 10,
//   },
//   totalText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'right',
//   },
//   deleteButton: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: '#D32F2F',
//     padding: 5,
//     borderRadius: 5,
//   },
//   deleteButtonText: {
//     color: '#fff',
//     fontWeight: 'bold', 
//   },
//   deleteButton: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     backgroundColor: '#D32F2F',
//     padding: 5,
//     borderRadius: 5,
//   },
//   deleteButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },

//   modalHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   paymentButton: { 
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#D32F2F',
//     borderRadius: 8,
//   },
//   paymentButtonText: { 
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   closeButton: {  
//     marginTop: 15,
//     padding: 10,
//     backgroundColor: '#D32F2F',
//     borderRadius: 8,
//   },
//   closeButtonText: {    
//     color: '#fff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default Home;


























































































import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Modal, Alert, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = ({ onLogout }) => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');




  const foodMenuItems = [
    {
      id: '1',
      title: 'Foundation',
      price: '48 TND',
      image: 'https://www.cultbeauty.com/images?url=https://static.thcdn.com/productimg/original/14228292-2125036374392654.jpg&format=webp&auto=avif&width=985&height=985&fit=cover',
      description: "Achieve a flawless base with our high-coverage foundation. Perfect for all-day wear!",
      category: 'For Face',
    },
    {
      id: '2',
      title: 'Concealer',
      price: '30 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd_wD7ki389b9c5iHPV2L2-EjDPIj2ZjEK_g&s',
      description: "Hide imperfections and brighten your complexion with our creamy concealer.",
      category: 'For Face',
    },
    {
      id: '3',
      title: 'Blush',
      price: '39 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfnGlqUb0okKIbbuU01LsjeHyI2ZPYyFwbg&s',
      description: "Add a natural flush to your cheeks with our soft and blendable blush.",
      category: 'For Face',
    },
    {
      id: '4',
      title: 'Eyeshadow Palette',
      price: '60 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWauMoSpzlpQ2NvSxn7IwY0yqJNHoDWJzN7g&s',
      description: "Create stunning eye looks with our versatile eyeshadow palette, available in various shades.",
      category: 'For Eyes',
    },
    {
      id: '5',
      title: 'Mascara',
      price: '45 TND',
      image: 'https://mykady.com/cdn/shop/products/D_OrleacMascaraBBCurl.jpg?v=1649407796',
      description: "Volumize and lengthen your lashes with our long-lasting mascara.",
      category: 'For Eyes',
    },
    {
      id: '6',
      title: 'Eyeliner',
      price: '33 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNG_dDO4Wu1LTemoTOtOZWj-7UFLrESstqg&s',
      description: "Define your eyes with precision using our smudge-proof eyeliner.",
      category: 'For Eyes',
    },
    {
      id: '7',
      title: 'Lipstick',
      price: '27 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSni3f81WLvtDNfR2e-g5c-VO0N6eNhrkhhhA&s',
      description: "Add a pop of color with our vibrant and moisturizing lipstick.",
      category: 'For Lips',
    },
    {
      id: '8',
      title: 'Lip Gloss',
      price: '21 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzGB58hNIZ9CnoMVcOfU5LOil9CCl6RWZOxw&s',
      description: "Get a shiny, glossy finish with our non-sticky lip gloss.",
      category: 'For Lips',
    },
    {
      id: '9',
      title: 'Lip Liner',
      price: '24 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvb1FeaRYimgWvH5LfSDSWulqjvVOZbQjxOA&s',
      description: "Define and shape your lips with our creamy lip liner that lasts all day.",
      category: 'For Lips',
    },
    {
      id: '10',
      title: 'Highlighter',
      price: '51 TND',
      image: 'https://m.media-amazon.com/images/I/21y46I+hkoL.jpg',
      description: "Add a radiant glow to your face with our shimmering highlighter.",
      category: 'For Face',
    },
    {
      id: '11',
      title: 'Setting Spray',
      price: '42 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXrHcDpetspItSzng1ciyyJSSbQAC0EIz2g&s',
      description: "Lock in your makeup with our long-lasting setting spray.",
      category: 'For Face',
    },
    {
      id: '12',
      title: 'Brow Pencil',
      price: '32 TND',
      image: 'https://www.muagreece.com/cdn/shop/files/Brow-Pencils_1080x.jpg?v=1711537426',
      description: "Shape and define your brows with our easy-to-use brow pencil.",
      category: 'For Eyes',
    },
    {
      id: '13',
      title: 'Liquid Lipstick',
      price: '45 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNlMHlScgWVzS0z48oqzme4lUiTQ64ci0MQ&s',
      description: "Achieve bold and long-lasting color with our liquid lipstick.",
      category: 'For Lips',
    },
    {
      id: '14',
      title: 'Eye Primer',
      price: '37.78 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaFGgLHuvU0jiMPwtde-_uKX8zVBlLUhLKg&s',
      description: "Prepare your eyelids for eyeshadow with our smooth and long-lasting eye primer.",
      category: 'For Eyes'
    },
    {
      id: '15',
      title: 'BB Cream',
      price: '42.49 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VjlvZZuNAkxg2IgPhuFD2FyZ0524Yl7jUA&s',
      description: "Achieve a natural, dewy finish with our lightweight BB cream.",
      category: 'For Face'
    },
    {
      id: '16',
      title: 'Lip Balm',
      price: '18.87 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWAsuguG3O0H44bpd9vgm8Hl-YHdZZEyUjg&s',
      description: "Keep your lips hydrated with our nourishing lip balm.",
      category: 'For Lips'
    },
    {
      id: '17',
      title: 'Contour Kit',
      price: '78.72 TND',
      image: 'https://www.sorme.com/cdn/shop/products/contour_kit_grande.jpg?v=1679287457',
      description: "Sculpt and define your face with our contour kit that includes all the shades you need.",
      category: 'For Face'
    },
    {
      id: '18',
      title: 'Eyebrow Gel',
      price: '28.34 TND',
      image: 'https://www.lookfantastic.com/images?url=https://static.thcdn.com/productimg/original/11530535-1364928263174830.jpg&format=webp&auto=avif',
      description: "Keep your brows in place all day with our smudge-proof eyebrow gel.",
      category: 'For Eyes'
    },
    {
      id: '19',
      title: 'Setting Powder',
      price: '39.34 TND',
      image: 'https://www.thedetoxmarket.ca/cdn/shop/files/ErePerez-CornSettingPowder-640x960-WEB_680x.jpg?v=1711397127',
      description: "Set your makeup for the day with our translucent setting powder.",
      category: 'For Face'
    },
    {
      id: '20',
      title: 'Lip Tint',
      price: '31.47 TND',
      image: 'https://down-ph.img.susercontent.com/file/sg-11134201-7rdxu-lyno10r16sdke0',
      description: "Add a natural tint to your lips with our lightweight, long-lasting lip tint.",
      category: 'For Lips'
    },
    {
      id: '21',
      title: 'Lash Primer',
      price: '37.78 TND',
      image: 'https://luxebykan.com/cdn/shop/files/IMG-9258.png?v=1725105142',
      description: "Get thicker and longer lashes with our nourishing lash primer.",
      category: 'For Eyes'
    },
    {
      id: '22',
      title: 'Face Serum',
      price: '62.98 TND',
      image: 'https://cdn05.zipify.com/K4jMzFQjDwLAY6D1U7gg6gOmgD4=/fit-in/3840x0/83624d4464b94e18a4d79a9a1eba23ef/upcircle_faceserum_1-4.jpeg',
      description: "Revitalize your skin with our hydrating and anti-aging face serum.",
      category: 'For Face'
    },
    {
      id: '23',
      title: 'Foundation Brush',
      price: '40.91 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLmSw_XoFu7Nq9tmPRziHMUgdB9zMkrte9zw&s',
      description: "Apply your foundation flawlessly with our soft and dense foundation brush.",
      category: 'Tools & Brushes'
    },
    {
      id: '24',
      title: 'Blush Brush',
      price: '31.47 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUxicwM9uHSrTk9T5QVjWY5hguBiUWaroSww&s',
      description: "Add a natural flush to your cheeks with our perfectly shaped blush brush.",
      category: 'Tools & Brushes'
    },
    {
      id: '25',
      title: 'Eyeshadow Brush Set',
      price: '53.62 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYWGQblGdmgfV1qLV_VKx_AcVJaxU5bPAAA&s',
      description: "Create precise eye looks with our set of essential eyeshadow brushes.",
      category: 'Tools & Brushes'
    },
    {
      id: '26',
      title: 'Eyeliner Brush',
      price: '25.17 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xPh_DHXaTzvNB23YK8wo4GeWnTXacyotCw&s',
      description: "Get sharp and defined lines with our angled eyeliner brush.",
      category: 'Tools & Brushes'
    },
    {
      id: '27',
      title: 'Makeup Sponge',
      price: '18.87 TND',
      image: 'https://m.media-amazon.com/images/I/81egbZD-YNL.jpg',
      description: "Achieve a smooth, airbrushed look with our soft and durable makeup sponge.",
      category: 'Tools & Brushes'
    },
    {
      id: '28',
      title: 'Setting Powder Brush',
      price: '36.19 TND',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN9JMASaCTb90LSOp8DF0mw9H5kf3dCCHTaA&s',
      description: "Apply your setting powder evenly with our fluffy, soft brush.",
      category: 'Tools & Brushes'
    },
    {
      id: '29',
      title: 'Fan Brush',
      price: '28.34 TND',
      image: 'https://m.media-amazon.com/images/I/61jVoPN6XSL.jpg',
      description: "Highlight your face with our delicate fan brush for a soft, glowy finish.",
      category: 'Tools & Brushes'
    }


  ];

  const handleAddToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex > -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    console.log(`${item.title} added to cart`);
  };

  const handleRemoveFromCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex > -1) {
      const updatedCartItems = [...cartItems];
      if (updatedCartItems[existingItemIndex].quantity > 1) {
        updatedCartItems[existingItemIndex].quantity--;
      } else {
        updatedCartItems.splice(existingItemIndex, 1);
      }
      setCartItems(updatedCartItems);
    }
  };

  const handleDeleteCartItem = (itemId) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to remove this food from your cart?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: () => setCartItems(cartItems.filter(item => item.id !== itemId))
        }
      ]
    );
  };
  const categories = ['All', 'For Face', 'For Eyes', 'For Lips', 'Tools & Brushes'];

  const filteredFoodItems = foodMenuItems.filter((item) => {
    const isCategoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const isSearchMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return isCategoryMatch && isSearchMatch;
  });



  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedFood(item)}>
      <View style={styles.menuItem}>
        <Image source={{ uri: item.image }} style={styles.foodImage} />
        <View style={styles.textContainer}>
          <Text style={styles.menuText}>{item.title}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{cartItems.find(cartItem => cartItem.id === item.id)?.quantity || 0}</Text>
            <TouchableOpacity onPress={() => handleAddToCart(item)} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteCartItem(item.id)}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <Text style={styles.cartItemText}>
        {item.title} - {item.price} x {item.quantity}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with Title and Basket Icon */}
      <View style={styles.header}>
        <Text style={styles.menuTitle}>Welcome to LuxeLook!</Text>
        <View style={styles.basketContainer}>
          <TouchableOpacity onPress={() => setIsCartVisible(true)}>
            <Icon name="shopping-basket" size={30} color="#5D4037" />
          </TouchableOpacity>
          {cartItems.length > 0 && <View style={styles.notificationDot} />}
        </View>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search for Clothes..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <View style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {selectedFood ? (
        <View style={styles.detailContainer}>
          <TouchableOpacity style={styles.backButton} onPress={() => setSelectedFood(null)}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
          <Image source={{ uri: selectedFood.image }} style={styles.detailImage} />
          <Text style={styles.detailTitle}>{selectedFood.title}</Text>
          <Text style={styles.detailPrice}>{selectedFood.price}</Text>
          <Text style={styles.detailDescription}>{selectedFood.description}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => handleRemoveFromCart(selectedFood)} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{cartItems.find(cartItem => cartItem.id === selectedFood.id)?.quantity || 0}</Text>
            <TouchableOpacity onPress={() => handleAddToCart(selectedFood)} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <>
          <FlatList
            data={filteredFoodItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.menuList}
          />
          <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Modal for displaying cart items */}
      <Modal
        visible={isCartVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsCartVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Cart Items</Text>
              <TouchableOpacity style={styles.closeButton} onPress={() => setIsCartVisible(false)}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={cartItems}
              renderItem={renderCartItem}
              keyExtractor={(item) => item.id}
            />
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>
                Total: {cartItems.reduce((total, item) => total + parseFloat(item.price.replace('TND', '')) * item.quantity, 0).toFixed(2)}TND
              </Text>
            </View>
            <TouchableOpacity
              style={styles.paymentButton}
              onPress={() => {
                if (cartItems.length === 0) {
                  Alert.alert(
                    "Cart is empty",
                    "You have to add something to your cart",
                    [
                      {
                        text: "OK",
                        onPress: () => setIsCartVisible(false)
                      }
                    ]
                  );
                } else {
                  Alert.alert(
                    "Confirm Purchase",
                    "Are you sure that you want to buy this?",
                    [
                      {
                        text: "Cancel",
                        style: "cancel"
                      },
                      {
                        text: "Confirm",
                        onPress: () => {
                          Alert.alert(
                            "Success",
                            "Payment Successful!"
                          );
                          setIsCartVisible(false);
                          setCartItems([]);
                        }
                      }
                    ]
                  );
                }
              }}>
              <Text style={styles.paymentButtonText}>Payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8', // Light gray background for a soft feel
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
  },
  basketContainer: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF4081', // Pink for notifications
  },
  menuTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3D3D3D', // Darker text for contrast and legibility
    textAlign: 'center',
    marginBottom: 25,
  },
  menuList: {
    marginBottom: 25,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff', // Clean white background
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  foodImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E1F5FE', // Soft blue border for a fresh look
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#212121', // Dark gray text for contrast
  },
  descriptionText: {
    fontSize: 15,
    color: '#757575', // Subtle gray for descriptions
    marginBottom: 5,
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF4081', // Bright pink for prices to grab attention
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: '#FF4081', // Bold pink background for quantity buttons
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  logoutButton: {
    backgroundColor: '#FF4081', // Consistent pink theme for logout
    padding: 12,
    borderRadius: 8,
    marginTop: 30,
  },
  logoutButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  detailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#FF4081', // Bright color for back button
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  detailImage: {
    width: 220,
    height: 220,
    borderRadius: 15,
    marginBottom: 15,
  },
  detailTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3D3D3D', // Dark gray for detail title
  },
  detailPrice: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF4081', // Bright pink for price
  },
  detailDescription: {
    fontSize: 18,
    color: '#B0BEC5', // Light gray for descriptions
    marginVertical: 10,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    flex: 1,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    paddingHorizontal: 10,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#FF4081', // Bright pink for modal title
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    position: 'relative',
  },
  cartItemImage: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 12,
  },
  cartItemText: {
    fontSize: 15,
    color: '#212121',
  },
  totalContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 15,
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#FF4081', // Bright pink for total amount
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: '#FF1744', // Red for delete button
    padding: 6,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  paymentButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#FF4081', // Bold pink for payment button
    borderRadius: 8,
  },
  paymentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#FF4081', // Consistent color for close button
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBar: {
    height: 45,
    borderColor: '#FF4081', // Pink border for the search bar
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 12,
    backgroundColor: '#FFEBEE', // Light pink for category buttons
    borderRadius: 8,
  },
  selectedCategoryButton: {
    backgroundColor: '#FF4081', // Highlight selected category
  },
  categoryButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Home;


































