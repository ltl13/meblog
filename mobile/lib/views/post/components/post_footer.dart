import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/post_card.dart';
import 'package:mobile/views/post/components/post_about_author.dart';
import 'package:sizer/sizer.dart';

class PostFooter extends StatelessWidget {
  const PostFooter({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Post post;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: mySecondaryColor,
      width: 100.w,
      padding: const EdgeInsets.symmetric(
        vertical: myPadding,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: myPadding,
            ),
            child: Text(
              "Author".toUpperCase(),
              style: TextStyle(
                color: myHeadlineColor,
                fontFamily: 'Roboto',
                fontWeight: FontWeight.bold,
                fontSize: 14.sp,
              ),
            ),
          ),
          SizedBox(height: 10.sp),
          Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: myPadding,
            ),
            child: PostAboutAuthor(post: post),
          ),
          SizedBox(height: 30.sp),
          Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: myPadding,
            ),
            child: Text(
              "What you should read next".toUpperCase(),
              style: TextStyle(
                color: myHeadlineColor,
                fontFamily: 'Roboto',
                fontWeight: FontWeight.bold,
                fontSize: 14.sp,
              ),
            ),
          ),
          SizedBox(height: 10.sp),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(
              children: [
                ...posts.map(
                  (e) => PostCard(style: PostCardStyle.portrait, post: e),
                ),
                const SizedBox(width: myPadding / 2),
              ],
            ),
          ),
          SizedBox(height: 40.sp),
        ],
      ),
    );
  }
}
