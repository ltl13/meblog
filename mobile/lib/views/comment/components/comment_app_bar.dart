import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class CommentAppBar extends StatelessWidget with PreferredSizeWidget {
  const CommentAppBar({Key? key}) : super(key: key);

  @override
  // TODO: implement preferredSize
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: myMainColor,
      elevation: 1,
      shadowColor: myMainColor,
      centerTitle: true,
      automaticallyImplyLeading: true,
      leadingWidth: 24.sp,
      iconTheme: IconThemeData(color: myButtonTextColor, size: 16.sp),
      titleTextStyle: TextStyle(
        color: myHeadlineColor,
        fontFamily: 'Roboto',
        fontSize: 16.sp,
      ),
      title: const Text(
        "Comments",
      ),
    );
  }
}
