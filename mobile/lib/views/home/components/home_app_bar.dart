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
    return SliverAppBar(
      pinned: true,
      floating: true,
      forceElevated: true,
      backgroundColor: myMainColor,
      automaticallyImplyLeading: false,
      elevation: 1,
      shadowColor: myTextColor,
      bottom: TabBar(
        indicator: UnderlineTabIndicator(
          borderSide: BorderSide(width: 2, color: myHeadlineColor),
          insets: const EdgeInsets.symmetric(horizontal: 0),
        ),
        labelStyle: TextStyle(
          color: myHeadlineColor,
          fontSize: 14.sp,
          fontFamily: 'Roboto',
        ),
        unselectedLabelStyle: TextStyle(
          color: mySubHeadlineColor,
          fontSize: 14.sp,
          fontFamily: 'Roboto',
        ),
        labelPadding: EdgeInsets.symmetric(horizontal: 10.sp),
        labelColor: myHeadlineColor,
        indicatorColor: myHeadlineColor,
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
          color: myHeadlineColor,
        ),
      ),
      actions: [
        IconButton(
          onPressed: null,
          icon: FaIcon(
            FontAwesomeIcons.bell,
            color: myHeadlineColor,
            size: 20.sp,
          ),
        ),
      ],
    );
  }
}
