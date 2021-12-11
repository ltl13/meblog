import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/author_with_image.dart';
import 'package:sizer/sizer.dart';

class PortraitPostCard extends StatelessWidget {
  final Post post;
  const PortraitPostCard({
    Key? key,
    required this.post,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 240.sp,
      height: 240.sp,
      padding: const EdgeInsets.only(
        left: myPadding,
        right: myPadding / 2,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Container(
            height: 120.sp,
            width: 240.sp,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(5),
              image: DecorationImage(
                image: AssetImage(post.image),
                fit: BoxFit.fill,
              ),
            ),
          ),
          AuthorWithImage(
            post: post,
            size: AuthorWithImageSize.medium,
          ),
          RichText(
            textAlign: TextAlign.left,
            overflow: TextOverflow.ellipsis,
            maxLines: 3,
            text: TextSpan(
              text: post.title,
              style: TextStyle(
                color: myHeadlineColor,
                fontFamily: 'Roboto',
                fontWeight: FontWeight.bold,
                fontSize: 16.sp,
              ),
            ),
          ),
          Text(
            post.datePost + "  •  " + post.timeReading.toString() + " min read",
            style: TextStyle(
              color: mySubHeadlineColor.withOpacity(.7),
              fontFamily: 'Roboto',
              fontSize: 14.sp,
              fontWeight: FontWeight.normal,
            ),
          ),
        ],
      ),
    );
  }
}
