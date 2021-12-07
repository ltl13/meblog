import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class SearchAppBar extends StatelessWidget {
  const SearchAppBar({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      snap: false,
      pinned: false,
      floating: false,
      automaticallyImplyLeading: false,
      backgroundColor: myBackgroundColor,
      foregroundColor: myHeadlineColor,
      elevation: 0,
      centerTitle: false,
      title: Text(
        "Explore",
        style: TextStyle(
          color: myHeadlineColor,
          fontFamily: 'Roboto',
          fontSize: 24.sp,
        ),
      ),
    );
  }
}
