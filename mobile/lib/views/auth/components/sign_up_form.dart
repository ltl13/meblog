import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/routes/app_routes.dart';
import 'package:mobile/views/auth/components/auth_text_button.dart';
import 'package:mobile/views/auth/components/line_with_text.dart';
import 'package:mobile/views/auth/components/richtext_with_tapable_text.dart';
import 'package:mobile/views/auth/components/round_icon_button.dart';
import 'package:mobile/views/auth/components/text_field_with_icon.dart';
import 'package:sizer/sizer.dart';

class SignUpForm extends StatelessWidget {
  final ValueNotifier<bool> isSignIn;
  const SignUpForm({
    Key? key,
    required this.isSignIn,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        Text(
          'Join Meblog.',
          style: TextStyle(
            fontFamily: 'Amaranth',
            color: myHeadlineColor,
            fontSize: 30.sp,
          ),
        ),
        SizedBox(height: 20.sp),
        const TextFieldWithPrefixIcon(
          icon: Icons.person,
          hint: "Name",
        ),
        SizedBox(height: 20.sp),
        const TextFieldWithPrefixIcon(
          icon: Icons.email,
          hint: "Email",
        ),
        SizedBox(height: 20.sp),
        const TextFieldWithPrefixIcon(
          icon: Icons.lock_outline,
          hint: "Password",
        ),
        SizedBox(height: 20.sp),
        const TextFieldWithPrefixIcon(
          icon: Icons.lock_outline,
          hint: "Confirm password",
        ),
        SizedBox(height: 30.sp),
        AuthTextButton(
          text: "Sign up",
          onTap: () => Get.toNamed(AppRoutes.MAIN),
        ),
        SizedBox(height: 30.sp),
        const LineWithText(text: "Or, sign up with"),
        SizedBox(height: 30.sp),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: myPadding * 2),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: const [
              RoundIconButton(icon: FontAwesomeIcons.twitter),
              RoundIconButton(icon: FontAwesomeIcons.facebook),
              RoundIconButton(icon: FontAwesomeIcons.google),
              RoundIconButton(icon: FontAwesomeIcons.linkedin),
            ],
          ),
        ),
        SizedBox(height: 30.sp),
        RichTextWithTapableText(
          text: "Already have an accout? ",
          tapableTex: 'Sign in',
          onTap: () => isSignIn.value = true,
        ),
      ],
    );
  }
}
