import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:get/get.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/routes/app_routes.dart';
import 'package:mobile/views/auth/components/line_with_text.dart';
import 'package:mobile/views/auth/components/text_icon_button.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';
import 'components/round_icon_button.dart';

class AuthScreen extends StatelessWidget {
  const AuthScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      child: ChangeNotifierProvider<ValueNotifier<bool>>(
          create: (_) => ValueNotifier<bool>(true),
          builder: (context, snapshot) {
            final _isRegisterProvider =
                Provider.of<ValueNotifier<bool>>(context);
            return Container(
              color: primaryBackgroundColor,
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
                    _isRegisterProvider.value
                        ? 'Join MeBlog.'
                        : 'Welcome back.',
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
                        text: _isRegisterProvider.value
                            ? 'Sign up with Google'
                            : 'Sign in with Google',
                        onPress: () => Get.toNamed(AppRoutes.HOME),
                      ),
                      TextIconButton(
                        icon: FontAwesomeIcons.envelope,
                        text: _isRegisterProvider.value
                            ? 'Sign up with Email'
                            : 'Sign in with Email',
                        onPress: () => Get.toNamed(AppRoutes.HOME),
                      ),
                      SizedBox(height: 16.sp),
                      LineWithText(
                        text: _isRegisterProvider.value
                            ? "Or, sign up with"
                            : "Or, sign in with",
                      ),
                      SizedBox(height: 20.sp),
                      // ignore: prefer_const_constructors
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const RoundIconButton(
                              icon: FontAwesomeIcons.facebook),
                          SizedBox(height: 20.sp),
                          const RoundIconButton(icon: FontAwesomeIcons.twitter),
                        ],
                      ),
                      SizedBox(height: 20.sp),
                      RichText(
                        text: TextSpan(
                          children: [
                            TextSpan(
                              text: _isRegisterProvider.value
                                  ? 'Already have an account? '
                                  : "Don't have an accout? ",
                              style: TextStyle(
                                fontFamily: 'Roboto',
                                fontSize: 14.sp,
                                color: primaryTextColor,
                              ),
                            ),
                            TextSpan(
                              text: _isRegisterProvider.value
                                  ? 'Sign in'
                                  : 'Sign up',
                              style: TextStyle(
                                fontFamily: 'Roboto',
                                fontSize: 14.sp,
                                color: linkColor,
                              ),
                              recognizer: TapGestureRecognizer()
                                ..onTap = () {
                                  _isRegisterProvider.value =
                                      !_isRegisterProvider.value;
                                },
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            );
          }),
    );
  }
}
