import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class LineWithText extends StatelessWidget {
  final String text;
  const LineWithText({
    Key? key,
    required this.text,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Divider(color: primaryButtonTextColor, thickness: 1),
        Container(
          margin: EdgeInsets.symmetric(horizontal: 80.sp),
          alignment: Alignment.center,
          color: primaryColor,
          child: Text(
            text,
            style: TextStyle(
              fontFamily: 'Roboto',
              fontSize: 14.sp,
              color: secondaryTextColor,
            ),
          ),
        )
      ],
    );
  }
}
