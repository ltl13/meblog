import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class HomeAppBar extends StatelessWidget with PreferredSizeWidget {
  final TabController _topTabController;
  final List<String> _topTabs;

  const HomeAppBar({
    Key? key,
    required TabController topTabController,
    required List<String> topTabs,
  })  : _topTabController = topTabController,
        _topTabs = topTabs,
        super(key: key);

  @override
  // TODO: implement preferredSize
  Size get preferredSize => Size.fromHeight(80.sp);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: primaryBackgroundColor,
      automaticallyImplyLeading: false,
      elevation: 1,
      shadowColor: primaryTextColor,
      bottom: TabBar(
        indicator: UnderlineTabIndicator(
          borderSide: BorderSide(width: 2, color: titleColor),
          insets: const EdgeInsets.symmetric(horizontal: 0),
        ),
        labelStyle: TextStyle(
          color: titleColor,
          fontSize: 14.sp,
          fontFamily: 'Roboto',
        ),
        unselectedLabelStyle: TextStyle(
          color: secondaryTextColor,
          fontSize: 14.sp,
          fontFamily: 'Roboto',
        ),
        labelPadding: EdgeInsets.symmetric(horizontal: 10.sp),
        labelColor: titleColor,
        indicatorColor: titleColor,
        controller: _topTabController,
        tabs: _topTabs.map((tab) => Tab(text: tab)).toList(),
        isScrollable: true,
      ),
      title: Text(
        "Home",
        style: TextStyle(
          fontFamily: 'Roboto',
          fontWeight: FontWeight.bold,
          fontSize: 24.sp,
          color: titleColor,
        ),
      ),
      actions: [
        IconButton(
          onPressed: null,
          icon: FaIcon(
            FontAwesomeIcons.bell,
            color: titleColor,
            size: 20.sp,
          ),
        ),
      ],
    );
  }
}
