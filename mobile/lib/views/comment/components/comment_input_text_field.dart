import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class CommentInputTextField extends StatelessWidget {
  const CommentInputTextField({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: myMainColor,
        border: Border(top: BorderSide(color: myStrokeColor, width: 1)),
      ),
      width: 100.w,
      height: 40.sp,
      child: Row(
        children: [
          Expanded(
            child: TextField(
              style: TextStyle(fontSize: 14.sp),
              decoration: InputDecoration(
                hintText: "What do you think?",
                hintStyle: TextStyle(
                  fontSize: 14.sp,
                  fontFamily: 'Roboto',
                  color: myTextColor.withOpacity(.7),
                ),
                contentPadding: const EdgeInsets.symmetric(
                  horizontal: myPadding,
                ),
                border: const OutlineInputBorder(
                  borderSide: BorderSide.none,
                ),
                errorBorder: const OutlineInputBorder(
                  borderSide: BorderSide.none,
                ),
                enabledBorder: const OutlineInputBorder(
                  borderSide: BorderSide.none,
                ),
                focusedBorder: const OutlineInputBorder(
                  borderSide: BorderSide.none,
                ),
                disabledBorder: const OutlineInputBorder(
                  borderSide: BorderSide.none,
                ),
              ),
            ),
          ),
          IconButton(
            onPressed: null,
            icon: Icon(Icons.send, color: myButtonColor, size: 20.sp),
          ),
        ],
      ),
    );
  }
}
