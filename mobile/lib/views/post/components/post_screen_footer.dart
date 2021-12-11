import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:sizer/sizer.dart';

class PostScreenFooter extends StatelessWidget {
  const PostScreenFooter({
    Key? key,
    required ValueNotifier<bool> isFooterVisibleProvider,
  })  : _isFooterVisibleProvider = isFooterVisibleProvider,
        super(key: key);

  final ValueNotifier<bool> _isFooterVisibleProvider;

  @override
  Widget build(BuildContext context) {
    return AnimatedPositioned(
        duration: const Duration(milliseconds: 500),
        bottom: _isFooterVisibleProvider.value ? 0 : -40.sp,
        left: 0,
        right: 0,
        child: Container(
          color: myMainColor,
          height: 40.sp,
          width: 100.w,
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              TextButton.icon(
                onPressed: null,
                icon: Icon(
                  Icons.thumb_up_outlined,
                  size: 16.sp,
                  color: myButtonColor,
                ),
                label: Text(
                  "13.2k",
                  style: TextStyle(
                    color: myButtonColor,
                    fontSize: 12.sp,
                    fontFamily: 'Roboto',
                  ),
                ),
              ),
              TextButton.icon(
                onPressed: null,
                icon: Icon(
                  Icons.comment_outlined,
                  size: 16.sp,
                  color: myButtonColor,
                ),
                label: Text(
                  "21.2k",
                  style: TextStyle(
                    color: myButtonColor,
                    fontSize: 12.sp,
                    fontFamily: 'Roboto',
                  ),
                ),
              ),
              IconButton(
                onPressed: null,
                icon: Icon(Icons.share, size: 16.sp, color: myButtonColor),
              ),
              IconButton(
                onPressed: null,
                icon: Icon(
                  Icons.bookmark_add_outlined,
                  size: 16.sp,
                  color: myButtonColor,
                ),
              ),
              PopupMenuButton(
                itemBuilder: (context) => [],
                icon: Icon(
                  Icons.more_vert,
                  size: 16.sp,
                  color: myButtonColor,
                ),
              ),
            ],
          ),
        ));
  }
}
