import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:sizer/sizer.dart';

enum AuthorWithImageMode { light, dark }
enum AuthorWithImageSize { small, medium, big }

class AuthorWithImage extends StatelessWidget {
  final AuthorWithImageMode mode;
  final AuthorWithImageSize size;
  const AuthorWithImage({
    Key? key,
    required this.post,
    required this.mode,
    required this.size,
  }) : super(key: key);

  final Post post;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        CircleAvatar(
          foregroundImage: AssetImage(post.author.image),
          radius: size == AuthorWithImageSize.small
              ? 8.sp
              : size == AuthorWithImageSize.medium
                  ? 10.sp
                  : 12.sp,
        ),
        SizedBox(width: 8.sp),
        Text(
          post.author.name,
          style: TextStyle(
            color: mode == AuthorWithImageMode.light
                ? myTextColor
                : myMainColor,
            fontSize: size == AuthorWithImageSize.small
                ? 12.sp
                : size == AuthorWithImageSize.medium
                    ? 14.sp
                    : 16.sp,
            fontFamily: 'Roboto',
            fontWeight: FontWeight.normal,
          ),
        )
      ],
    );
  }
}
