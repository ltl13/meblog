import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:sizer/sizer.dart';

class PostScreenAboutAuthor extends StatelessWidget {
  const PostScreenAboutAuthor({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Post post;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Flexible(
          flex: 1,
          child: CircleAvatar(
            backgroundImage: AssetImage(post.author.image),
            radius: 20.sp,
          ),
        ),
        Flexible(
          flex: 3,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                post.author.name,
                style: TextStyle(
                  color: mySubHeadlineColor,
                  fontFamily: 'Roboto',
                  fontWeight: FontWeight.w500,
                  fontSize: 14.sp,
                ),
              ),
              RichText(
                overflow: TextOverflow.ellipsis,
                maxLines: 2,
                text: TextSpan(
                  text: post.author.description,
                  style: TextStyle(
                    color: myTextColor,
                    fontFamily: 'Roboto',
                    fontSize: 12.sp,
                  ),
                ),
              ),
            ],
          ),
        ),
        Flexible(
          flex: 2,
          child: TextButton(
            onPressed: null,
            style: TextButton.styleFrom(
              fixedSize: Size(80.sp, 20.sp),
              backgroundColor: myButtonColor,
              shape: RoundedRectangleBorder(
                side: BorderSide(color: myButtonColor, width: 1),
                borderRadius: BorderRadius.circular(50.sp),
              ),
            ),
            child: Text(
              "Follow",
              style: TextStyle(
                fontFamily: 'Roboto',
                fontSize: 12.sp,
                color: myButtonTextColor,
              ),
            ),
          ),
        ),
      ],
    );
  }
}
