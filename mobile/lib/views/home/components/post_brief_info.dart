import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:sizer/sizer.dart';

class PostBriefInfo extends StatelessWidget {
  const PostBriefInfo({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Post post;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Flexible(
          flex: 2,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                post.title,
                style: TextStyle(
                  color: myHeadlineColor,
                  fontSize: 16.sp,
                  fontFamily: 'Roboto',
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                post.datePost +
                    "  •  " +
                    post.timeReading.toString() +
                    " min read",
                style: TextStyle(
                  color: mySubHeadlineColor.withOpacity(.7),
                  fontFamily: 'Roboto',
                  fontSize: 12.sp,
                  fontWeight: FontWeight.normal,
                ),
              ),
            ],
          ),
        ),
        SizedBox(width: 10.sp),
        Flexible(
          flex: 1,
          child: FittedBox(
            fit: BoxFit.scaleDown,
            child: Image.asset(post.image),
          ),
        ),
      ],
    );
  }
}
