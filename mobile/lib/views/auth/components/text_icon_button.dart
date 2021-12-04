import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class TextIconButton extends StatelessWidget {
  final Function onPress;
  final IconData icon;
  final String text;
  const TextIconButton({
    Key? key,
    required this.icon,
    required this.text,
    required this.onPress,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () => onPress(),
      style: TextButton.styleFrom(
        backgroundColor: primaryButtonColor,
        shape: RoundedRectangleBorder(
          side: BorderSide(color: primaryButtonTextColor),
          borderRadius: BorderRadius.circular(20.sp),
        ),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          FaIcon(icon, size: 16.sp, color: primaryButtonTextColor),
          Text(
            text,
            style: TextStyle(
              fontSize: 14.sp,
              fontFamily: 'Roboto',
              fontWeight: FontWeight.normal,
              color: primaryButtonTextColor,
            ),
          ),
          SizedBox(width: 16.sp),
        ],
      ),
    );
  }
}
