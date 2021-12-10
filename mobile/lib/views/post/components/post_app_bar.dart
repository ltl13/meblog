import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class PostAppBar extends StatelessWidget {
  const PostAppBar({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverAppBar(
      automaticallyImplyLeading: false,
      backgroundColor: Colors.transparent,
      pinned: false,
      floating: true,
      snap: true,
      actions: [
        TextButton(
          onPressed: () => Get.back(),
          child: Icon(Icons.close, color: myMainColor, size: 16.sp),
          style: TextButton.styleFrom(
            fixedSize: Size(20.sp, 20.sp),
            shape: CircleBorder(),
            backgroundColor: myStrokeColor.withOpacity(.1),
          ),
        ),
      ],
    );
  }
}
