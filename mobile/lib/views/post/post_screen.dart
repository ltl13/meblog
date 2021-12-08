import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:sizer/sizer.dart';

class SinglePost extends StatelessWidget {
  final Post post;
  const SinglePost({
    Key? key,
    required this.post,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: myPadding),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              post.title,
              style: TextStyle(
                color: myHeadlineColor,
                fontSize: 20.sp,
                fontWeight: FontWeight.bold,
                fontFamily: 'Roboto',
              ),
            ),
            Text(
              post.author.name,
              style: TextStyle(
                color: myHighlightColor,
                fontSize: 16.sp,
                fontWeight: FontWeight.bold,
                fontFamily: 'Roboto',
              ),
            ),
            Image.asset(post.image),
            RichText(
              textAlign: TextAlign.justify,
              textDirection: TextDirection.ltr,
              text: TextSpan(
                text: post.content,
                style: TextStyle(
                  color: myParagraphColor,
                  fontFamily: 'Roboto',
                  fontSize: 14.sp,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
