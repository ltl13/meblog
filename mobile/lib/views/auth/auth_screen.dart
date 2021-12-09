import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/auth/components/sign_in_form.dart';
import 'package:mobile/views/auth/components/sign_up_form.dart';
import 'package:provider/provider.dart';

class AuthScreen extends StatelessWidget {
  const AuthScreen({Key? key}) : super(key: key);

  // @override
  // Widget build(BuildContext context) {
  //   return Material(
  //     child: ChangeNotifierProvider<ValueNotifier<bool>>(
  //         create: (_) => ValueNotifier<bool>(true),
  //         builder: (context, widget) {
  //           final _isRegisterProvider =
  //               Provider.of<ValueNotifier<bool>>(context);
  //           return Container(
  //             color: myBackgroundColor,
  //             padding: const EdgeInsets.symmetric(horizontal: myPadding),
  //             child: Column(
  //               crossAxisAlignment: CrossAxisAlignment.center,
  //               mainAxisAlignment: MainAxisAlignment.center,
  //               children: [
  //                 Text(
  //                   "MeBlog",
  //                   style: TextStyle(
  //                     fontSize: 50.sp,
  //                     fontFamily: 'Amaranth',
  //                     color: myParagraphColor,
  //                     fontWeight: FontWeight.w700,
  //                   ),
  //                 ),
  //                 SizedBox(height: 20.sp),
  //                 Text(
  //                   _isRegisterProvider.value
  //                       ? 'Join MeBlog.'
  //                       : 'Welcome back.',
  //                   style: TextStyle(
  //                     fontFamily: 'Amaranth',
  //                     color: myParagraphColor,
  //                     fontSize: 30.sp,
  //                   ),
  //                 ),
  //                 SizedBox(height: 20.sp),
  //                 Column(
  //                   children: [
  //                     TextIconButton(
  //                       icon: FontAwesomeIcons.google,
  //                       text: _isRegisterProvider.value
  //                           ? 'Sign up with Google'
  //                           : 'Sign in with Google',
  //                       onPress: () => Get.toNamed(AppRoutes.MAIN),
  //                     ),
  //                     TextIconButton(
  //                       icon: FontAwesomeIcons.envelope,
  //                       text: _isRegisterProvider.value
  //                           ? 'Sign up with Email'
  //                           : 'Sign in with Email',
  //                       onPress: () => Get.toNamed(AppRoutes.MAIN),
  //                     ),
  //                     SizedBox(height: 16.sp),
  //                     LineWithText(
  //                       text: _isRegisterProvider.value
  //                           ? "Or, sign up with"
  //                           : "Or, sign in with",
  //                     ),
  //                     SizedBox(height: 20.sp),
  //                     // ignore: prefer_const_constructors
  //                     Row(
  //                       mainAxisAlignment: MainAxisAlignment.center,
  //                       children: [
  //                         const RoundIconButton(
  //                             icon: FontAwesomeIcons.facebook),
  //                         SizedBox(height: 20.sp),
  //                         const RoundIconButton(icon: FontAwesomeIcons.twitter),
  //                       ],
  //                     ),
  //                     SizedBox(height: 20.sp),
  //                     RichText(
  //                       text: TextSpan(
  //                         children: [
  //                           TextSpan(
  //                             text: _isRegisterProvider.value
  //                                 ? 'Already have an account? '
  //                                 : "Don't have an accout? ",
  //                             style: TextStyle(
  //                               fontFamily: 'Roboto',
  //                               fontSize: 14.sp,
  //                               color: myParagraphColor,
  //                             ),
  //                           ),
  //                           TextSpan(
  //                             text: _isRegisterProvider.value
  //                                 ? 'Sign in'
  //                                 : 'Sign up',
  //                             style: TextStyle(
  //                               fontFamily: 'Roboto',
  //                               fontSize: 14.sp,
  //                               color: myHighlightColor,
  //                             ),
  //                             recognizer: TapGestureRecognizer()
  //                               ..onTap = () {
  //                                 _isRegisterProvider.value =
  //                                     !_isRegisterProvider.value;
  //                               },
  //                           ),
  //                         ],
  //                       ),
  //                     ),
  //                   ],
  //                 ),
  //               ],
  //             ),
  //           );
  //         }),
  //   );
  // }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: myBackgroundColor,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: myPadding),
        child: ChangeNotifierProvider<ValueNotifier<bool>>(
            create: (context) => ValueNotifier<bool>(false),
            builder: (context, snapshot) {
              final _isSignIn = Provider.of<ValueNotifier<bool>>(context);
              return _isSignIn.value
                  ? SignInForm(isSignIn: _isSignIn)
                  : SignUpForm(isSignIn: _isSignIn);
            }),
      ),
    );
  }
}
