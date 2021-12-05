import 'package:flutter/material.dart';
import 'package:mobile/views/auth/auth_screen.dart';
import 'package:mobile/views/home/home_screen.dart';
import 'package:sizer/sizer.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return Sizer(
      builder: (context, orientation, deviceType) {
        return MaterialApp(
          debugShowCheckedModeBanner: false,
          title: 'MeBlog',
          theme: ThemeData(
            primarySwatch: Colors.blue,
          ),
          initialRoute: '/auth',
          routes: {
            '/auth': (context) => AuthScreen(),
            '/home': (context) => HomeScreen(),
          },
        );
      },
    );
  }
}
