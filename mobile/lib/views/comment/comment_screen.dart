import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/comment/components/comment_app_bar.dart';
import 'package:sizer/sizer.dart';

class CommentScreen extends StatelessWidget {
  const CommentScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CommentAppBar(),
      body: Stack(
        children: [
          Positioned(
            bottom: 0,
            left: 0,
            right: 0,
            child: Container(
              decoration: BoxDecoration(
                color: myMainColor,
                border: Border(top: BorderSide(color: myStrokeColor, width: 1)),
              ),
              width: 100.w,
              height: 40.sp,
              child: TextField(
                style: TextStyle(fontSize: 14.sp),
                decoration: const InputDecoration(
                  border: OutlineInputBorder(borderSide: BorderSide.none),
                  errorBorder: OutlineInputBorder(borderSide: BorderSide.none),
                  enabledBorder:
                      OutlineInputBorder(borderSide: BorderSide.none),
                  focusedBorder:
                      OutlineInputBorder(borderSide: BorderSide.none),
                  disabledBorder:
                      OutlineInputBorder(borderSide: BorderSide.none),
                ),
              ),
            ),
          )
        ],
      ),
    );
  }
}
