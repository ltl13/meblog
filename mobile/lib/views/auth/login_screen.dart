import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/auth/components/line_with_text.dart';
import 'package:mobile/views/auth/components/round_icon_button.dart';
import 'package:mobile/views/auth/components/text_icon_button.dart';
import 'package:sizer/sizer.dart';

class LoginScreen extends StatelessWidget {
  const LoginScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Container(
        color: primaryColor,
        padding: const EdgeInsets.symmetric(horizontal: myPadding),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              "MeBlog",
              style: TextStyle(
                fontSize: 50.sp,
                fontFamily: 'Amaranth',
                color: primaryTextColor,
                fontWeight: FontWeight.w700,
              ),
            ),
            SizedBox(height: 20.sp),
            Text(
              'Welcome back.',
              style: TextStyle(
                fontFamily: 'Amaranth',
                color: primaryTextColor,
                fontSize: 30.sp,
              ),
            ),
            SizedBox(height: 20.sp),
            Column(
              children: [
                TextIconButton(
                  icon: FontAwesomeIcons.google,
                  text: 'Sign in with Google',
                  onPress: () {},
                ),
                TextIconButton(
                  icon: FontAwesomeIcons.envelope,
                  text: 'Sign in with Email',
                  onPress: () {},
                ),
                SizedBox(height: 16.sp),
                const LineWithText(text: "Or, sign in with"),
                SizedBox(height: 20.sp),
                // ignore: prefer_const_constructors
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const RoundIconButton(icon: FontAwesomeIcons.facebook),
                    SizedBox(height: 20.sp),
                    const RoundIconButton(icon: FontAwesomeIcons.twitter),
                  ],
                ),
                SizedBox(height: 20.sp),
                RichText(
                  text: TextSpan(
                    children: [
                      TextSpan(
                        text: "Don't have an account? ",
                        style: TextStyle(
                          fontFamily: 'Roboto',
                          fontSize: 14.sp,
                          color: primaryTextColor,
                        ),
                      ),
                      TextSpan(
                        text: 'Sign up',
                        style: TextStyle(
                          fontFamily: 'Roboto',
                          fontSize: 14.sp,
                          color: linkColor,
                        ),
                        recognizer: TapGestureRecognizer()
                          ..onTap = () => Navigator.popUntil(
                                context,
                                ModalRoute.withName('/register'),
                              ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
