import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class PostScreenAppBar extends StatelessWidget {
  const PostScreenAppBar({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 40.sp,
      width: double.infinity,
      child: TextButton(
        onPressed: () => Get.back(),
        child: Icon(Icons.close, color: myMainColor, size: 16.sp),
        style: TextButton.styleFrom(
          fixedSize: Size(20.sp, 20.sp),
          shape: const CircleBorder(),
          backgroundColor: myStrokeColor.withOpacity(.1),
        ),
      ),
    );
  }
}
