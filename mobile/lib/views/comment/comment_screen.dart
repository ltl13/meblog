import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/comments.dart';
import 'package:mobile/views/comment/components/comment_app_bar.dart';
import 'package:mobile/views/comment/components/comment_input_text_field.dart';
import 'package:mobile/views/comment/components/single_comment.dart';
import 'package:sizer/sizer.dart';

class CommentScreen extends StatelessWidget {
  const CommentScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CommentAppBar(),
      body: Column(
        children: [
          Expanded(
            child: ListView(
              children: comments
                  .map((Comment e) => SingleComment(comment: e))
                  .toList(),
            ),
          ),
          const CommentInputTextField(),
        ],
      ),
    );
  }
}
