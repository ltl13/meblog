import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/auth/components/auth_text_button.dart';
import 'package:mobile/views/auth/components/text_field_with_icon.dart';
import 'package:sizer/sizer.dart';

class ResetPasswordScreen extends StatelessWidget {
  const ResetPasswordScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(horizontal: myPadding),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Text(
              'Reset password.',
              style: TextStyle(
                fontFamily: 'Amaranth',
                color: myHeadlineColor,
                fontSize: 30.sp,
              ),
            ),
            SizedBox(height: 20.sp),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 20.sp),
              child: Text(
                "An email with the reset link will be sent to you.",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontFamily: 'Roboto',
                  fontSize: 14.sp,
                  color: mySubHeadlineColor,
                ),
              ),
            ),
            SizedBox(height: 20.sp),
            const TextFieldWithPrefixIcon(
              icon: Icons.email,
              hint: "Email",
            ),
            SizedBox(height: 30.sp),
            AuthTextButton(
              text: "Send email",
              onTap: () {},
            ),
          ],
        ),
      ),
    );
  }
}
