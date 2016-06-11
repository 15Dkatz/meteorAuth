// var CylonObj = Cylon.robot({
//   connections: {
//     // Always check the port!
//     // How to access this port upon connection?
//     // User plugs in... program detects plug in and creates the port connection
//     arduino: { adaptor: ' ', port: '/dev/tty.usbmodem1421' }
//   },
//
//   devices: {
//     // led09: { driver: 'led', pin: 9 },
//     // led10: { driver: 'led', pin: 10 },
//     // led11: { driver: 'led', pin: 11 },
//     // led12: { driver: 'led', pin: 12 },
//     led13: { driver: 'led', pin: 13 }
//   },
//
//   work: function(my, color) {
//     // every((1).second(), my.led09.toggle);
//     // every((1).second(), my.led10.toggle);
//     // every((1).second(), my.led11.toggle);
//     // every((1).second(), my.led12.toggle);
//     every((1).second(), my.led13.toggle);
//
//   },
//
//   toggleRed: function() {
//     console.log('toggling Red from robot');
//     // refer to https://cylonjs.com/documentation/guides/working-with-robots/
//   }
// })
//
// export default CylonObj;
