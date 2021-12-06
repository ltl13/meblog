import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:sizer/sizer.dart';

class Post extends StatelessWidget {
  const Post({
    Key? key,
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
              posts[0].title,
              style: TextStyle(
                color: myHeadlineColor,
                fontSize: 20.sp,
                fontWeight: FontWeight.bold,
                fontFamily: 'Roboto',
              ),
            ),
            Text(
              posts[0].author,
              style: TextStyle(
                color: myHighlightColor,
                fontSize: 16.sp,
                fontWeight: FontWeight.bold,
                fontFamily: 'Roboto',
              ),
            ),
            Image.asset(posts[0].image),
            RichText(
              textAlign: TextAlign.justify,
              textDirection: TextDirection.ltr,
              text: TextSpan(
                text: posts[0].content,
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
