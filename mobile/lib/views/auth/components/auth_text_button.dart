import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class AuthTextButton extends StatelessWidget {
  final String text;
  final Function onTap;
  const AuthTextButton({
    Key? key,
    required this.text,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () => onTap(),
      style: TextButton.styleFrom(
        padding: EdgeInsets.symmetric(
          vertical: 10.sp,
          horizontal: 30.sp,
        ),
        backgroundColor: myButtonColor,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(50.sp),
        ),
      ),
      child: Text(
        text,
        style: TextStyle(
          color: myMainColor,
          fontSize: 16.sp,
          fontFamily: 'Roboto',
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }
}
