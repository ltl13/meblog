import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/auth/components/sign_in_form.dart';
import 'package:mobile/views/auth/components/sign_up_form.dart';
import 'package:provider/provider.dart';

class AuthScreen extends StatelessWidget {
  const AuthScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      color: myMainColor,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: myPadding),
        child: ChangeNotifierProvider<ValueNotifier<bool>>(
            create: (context) => ValueNotifier<bool>(true),
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
