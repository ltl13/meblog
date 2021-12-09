import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class TextFieldWithPrefixIcon extends StatelessWidget {
  final IconData icon;
  final String hint;
  const TextFieldWithPrefixIcon({
    Key? key,
    required this.icon,
    required this.hint,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextField(
      style: TextStyle(
        color: myButtonTextColor,
        fontFamily: 'Roboto',
        fontSize: 16.sp,
      ),
      decoration: InputDecoration(
        prefixIcon: Icon(
          icon,
          size: 20.sp,
          color: myButtonColor,
        ),
        hintText: hint,
        hintStyle: TextStyle(
          color: myButtonTextColor.withOpacity(.5),
          fontFamily: 'Roboto',
          fontSize: 16.sp,
        ),
        disabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(50.sp),
          borderSide: BorderSide(color: myButtonColor, width: 2),
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(50.sp),
          borderSide: BorderSide(color: myButtonColor, width: 2),
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(50.sp),
          borderSide: BorderSide(color: myButtonColor, width: 2),
        ),
      ),
    );
  }
}
