import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

enum TagSize { small, medium, big }

class Tag extends StatelessWidget {
  final String tag;
  final TagSize size;
  const Tag({
    Key? key,
    required this.tag,
    required this.size,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 5.sp, right: 5.sp),
      padding: EdgeInsets.all(5.sp),
      decoration: BoxDecoration(
        color: myTertiaryColor,
        borderRadius: BorderRadius.circular(20.sp),
      ),
      child: Text(
        tag,
        style: TextStyle(
          color: myButtonTextColor,
          fontFamily: 'Roboto',
          fontSize: size == TagSize.small
              ? 10.sp
              : size == TagSize.medium
                  ? 12.sp
                  : 16.sp,
          fontWeight: FontWeight.normal,
        ),
      ),
    );
  }
}
