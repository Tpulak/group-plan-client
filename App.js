// import React, { useEffect, useState, } from 'react';


// import { AppLoading } from 'expo';
// import Navigator from './routes/homeStack';

// import Navigation from './navigation';
// import Loading from './screens/loading'; // Import the Loading component
// import Login from './screens/login';
// import Signup from './screens/signup';
// import Home from './screens/home';
// import Group from './screens/group';

// // const Stack = createStackNavigator();

// export default function App() {
//   const [isLoading, setIsLoading] = useState(true); // State to control the loading screen
//   return (
//     <>
//       {isLoading ? (
//         <Loading setIsLoading={setIsLoading} />
//       ) : (
//           <>
//             {/* Remove the screens you don't want to display initially */}
//             <Login />
//             {/* <Signup /> */}
//             {/* <Home /> */}
//             {/* <Group /> */}
//           </>
//         )}
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import Loading from './screens/loading'; // Import the Loading component
import Navigation from './navigation';

export default function App() {
  const [isLoading, setIsLoading] = useState(true); // State to control the loading screen

  useEffect(() => {
    // Simulate an async initialization process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Replace this with your actual initialization logic
  }, []);

  if (isLoading) {
    return <Loading setIsLoading={setIsLoading} />;
  }

  return <Navigation />;
}






