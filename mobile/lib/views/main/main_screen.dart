import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/explore/explore_screen.dart';
import 'package:mobile/views/home/home_screen.dart';
import 'package:mobile/views/main/components/main_bottom_navigation_bar.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class MainScreen extends StatelessWidget {
  const MainScreen({Key? key}) : super(key: key);
  static final _listBodies = [
    const HomeScreen(),
    const ExploreScreen(),
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
            bottomNavigationBar: MainBottomNavigationBar(
              selectedIndexProvider: _selectedIndexProvider,
            ),
          );
        });
  }
}
