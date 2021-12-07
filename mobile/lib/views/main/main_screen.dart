import 'package:flutter/material.dart';
import 'package:mobile/views/home/home_screen.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({Key? key}) : super(key: key);
  static final _listBodies = [
    HomeScreen(),
    Container(),
    Container(),
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _listBodies[0],
      // bottomNavigationBar: BottomNavigationBar(
      //   items: const [
      //     BottomNavigationBarItem(icon: Icon(Icons.home)),
      //     BottomNavigationBarItem(icon: Icon(Icons.search)),
      //     BottomNavigationBarItem(icon: Icon(Icons.bookmark_border)),
      //     BottomNavigationBarItem(icon: Icon(Icons.person)),
      //   ],
      // ),
    );
  }
}
