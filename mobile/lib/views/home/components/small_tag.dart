import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class SmallTag extends StatelessWidget {
  final String tag;
  const SmallTag({
    Key? key,
    required this.tag,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 5.sp, right: 5.sp),
      padding: EdgeInsets.all(5.sp),
      decoration: BoxDecoration(
        color: myMainColor,
        borderRadius: BorderRadius.circular(20.sp),
      ),
      child: Text(
        tag,
        style: TextStyle(
          color: myButtonTextColor,
          fontFamily: 'Roboto',
          fontSize: 10.sp,
          fontWeight: FontWeight.normal,
        ),
      ),
    );
  }
}
