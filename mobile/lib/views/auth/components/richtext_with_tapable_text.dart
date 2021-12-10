import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class RichTextWithTapableText extends StatelessWidget {
  final String text, tapableTex;
  final Function onTap;
  const RichTextWithTapableText({
    Key? key,
    required this.text,
    required this.tapableTex,
    required this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return RichText(
      text: TextSpan(
        children: [
          TextSpan(
            text: text,
            style: TextStyle(
              fontFamily: 'Roboto',
              fontSize: 14.sp,
              color: mySubHeadlineColor,
            ),
          ),
          TextSpan(
            text: tapableTex,
            style: TextStyle(
              fontFamily: 'Roboto',
              fontSize: 14.sp,
              color: myHighlightColor,
            ),
            recognizer: TapGestureRecognizer()..onTap = () => onTap(),
          ),
        ],
      ),
    );
  }
}
