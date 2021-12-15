import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/author.dart';
import 'package:sizer/sizer.dart';

enum AuthorWithImageSize { small, medium, big }

class AuthorWithImage extends StatelessWidget {
  final AuthorWithImageSize size;
  const AuthorWithImage({
    Key? key,
    required this.author,
    required this.size,
  }) : super(key: key);

  final Author author;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        CircleAvatar(
          foregroundImage: AssetImage(author.image),
          radius: size == AuthorWithImageSize.small
              ? 8.sp
              : size == AuthorWithImageSize.medium
                  ? 10.sp
                  : 12.sp,
        ),
        SizedBox(width: 8.sp),
        Text(
          author.name,
          style: TextStyle(
            color:
                myTextColor,
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
