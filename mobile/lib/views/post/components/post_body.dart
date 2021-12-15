import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/author_with_image.dart';
import 'package:sizer/sizer.dart';

class PostBody extends StatelessWidget {
  const PostBody({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Post post;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(myPadding),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              AuthorWithImage(
                author: post.author,
                size: AuthorWithImageSize.big,
              ),
              Text(
                "  •  " + post.datePost,
                style: TextStyle(
                  color: mySubHeadlineColor.withOpacity(.7),
                  fontSize: 12.sp,
                ),
              ),
            ],
          ),
          SizedBox(height: 16.sp),
          Text(
            post.title,
            style: TextStyle(
              color: myHeadlineColor,
              fontSize: 20.sp,
              fontWeight: FontWeight.bold,
              fontFamily: 'Roboto',
            ),
          ),
          SizedBox(height: 16.sp),
          Image.asset(post.image),
          SizedBox(height: 16.sp),
          RichText(
            textAlign: TextAlign.left,
            text: TextSpan(
              text: post.content,
              style: TextStyle(
                color: myTextColor,
                fontFamily: 'SourceSans3',
                fontSize: 16.sp,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
