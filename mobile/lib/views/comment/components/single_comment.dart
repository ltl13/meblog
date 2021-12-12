import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/comment/components/single_comment_footer.dart';
import 'package:mobile/views/comment/components/single_comment_header.dart';
import 'package:sizer/sizer.dart';
import 'package:mobile/models/comments.dart';

class SingleComment extends StatelessWidget {
  final Comment comment;
  const SingleComment({
    Key? key,
    required this.comment,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: myPadding),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SingleCommentHeader(comment: comment),
          RichText(
            maxLines: 3,
            overflow: TextOverflow.ellipsis,
            text: TextSpan(
              text: comment.content,
              style: TextStyle(
                color: myTextColor,
                fontFamily: 'Roboto',
                fontSize: 14.sp,
              ),
            ),
          ),
          Text(
            "Show more".toUpperCase(),
            style: TextStyle(
              color: myHighlightColor,
              fontFamily: 'Roboto',
              fontSize: 12.sp,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SingleCommentFooter(),
          Divider(color: myStrokeColor),
        ],
      ),
    );
  }
}
