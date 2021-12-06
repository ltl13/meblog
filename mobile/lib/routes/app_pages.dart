import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mobile/routes/app_routes.dart';
import 'package:mobile/views/auth/auth_screen.dart';
import 'package:mobile/views/home/home_screen.dart';

class AppPages {
  static const INIT = AppRoutes.ROOT;

  static final routes = [
    GetPage(
      name: AppRoutes.ROOT,
      page: () => const AuthScreen(),
    ),
    GetPage(
      name: AppRoutes.HOME,
      page: () => const HomeScreen(),
      transition: Transition.fadeIn,
    )
  ];
}
