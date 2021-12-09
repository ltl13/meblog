import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class RoundIconButton extends StatelessWidget {
  final IconData icon;
  const RoundIconButton({
    Key? key,
    required this.icon,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: null,
      style: TextButton.styleFrom(
        backgroundColor: myBackgroundColor,
        shape: CircleBorder(side: BorderSide(color: myButtonColor, width: 2)),
      ),
      child: FaIcon(
        icon,
        color: myButtonColor,
        size: 24.sp,
      ),
    );
  }
}
