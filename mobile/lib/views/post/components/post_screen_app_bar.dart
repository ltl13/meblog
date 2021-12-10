import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class PostScreenAppBar extends StatelessWidget {
  final ValueNotifier<bool> _isFooterVisibleProvider;

  const PostScreenAppBar({
    Key? key,
    required ValueNotifier<bool> isAppBarVisibleProvider,
  })  : _isFooterVisibleProvider = isAppBarVisibleProvider,
        super(key: key);

  @override
  Widget build(BuildContext context) {
    return AnimatedPositioned(
      right: 10.sp,
      top: _isFooterVisibleProvider.value ? myPadding / 2 : -60.sp,
      duration: const Duration(milliseconds: 500),
      child: TextButton(
        onPressed: () => Get.back(),
        child: Icon(Icons.close, color: myMainColor, size: 20.sp),
        style: TextButton.styleFrom(
          padding: EdgeInsets.all(10.sp),
          shape: const CircleBorder(),
          backgroundColor: myStrokeColor.withOpacity(.1),
        ),
      ),
    );
  }
}
