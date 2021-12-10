import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class MainBottomNavigationBar extends StatelessWidget {
  const MainBottomNavigationBar({
    Key? key,
    required ValueNotifier<int> selectedIndexProvider,
  })  : _selectedIndexProvider = selectedIndexProvider,
        super(key: key);

  final ValueNotifier<int> _selectedIndexProvider;

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
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
    );
  }
}
