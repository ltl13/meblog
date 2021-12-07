import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/home/home_screen.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({Key? key}) : super(key: key);
  static final _listBodies = [
    HomeScreen(),
    Container(),
    Container(),
    Container(),
  ];
  @override
  Widget build(BuildContext context) {
    int _selectedIndex = 0;
    return ChangeNotifierProvider<ValueNotifier<int>>(
        create: (context) => ValueNotifier<int>(_selectedIndex),
        builder: (context, widget) {
          final _selectedIndexProvider =
              Provider.of<ValueNotifier<int>>(context);
          return Scaffold(
            body: _listBodies[_selectedIndexProvider.value],
            bottomNavigationBar: BottomNavigationBar(
              showSelectedLabels: false,
              showUnselectedLabels: false,
              currentIndex: _selectedIndexProvider.value,
              selectedItemColor: myButtonColor,
              onTap: (index) => _selectedIndexProvider.value = index,
              type: BottomNavigationBarType.fixed,
              unselectedIconTheme: IconThemeData(
                color: myButtonTextColor.withOpacity(.3),
                size: 24.sp,
              ),
              selectedIconTheme: IconThemeData(
                color: myButtonColor,
                size: 24.sp,
              ),
              items: const [
                BottomNavigationBarItem(
                  icon: Icon(Icons.home),
                  label: "Home",
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.search),
                  label: "Search",
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.bookmark_outline),
                  label: "Favorite",
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.person),
                  label: "Account",
                ),
              ],
            ),
          );
        });
  }
}
