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
        backgroundColor: myButtonColor,
        shape: const CircleBorder(),
      ),
      child: FaIcon(
        icon,
        color: myButtonTextColor,
        size: 24.sp,
      ),
    );
  }
}
