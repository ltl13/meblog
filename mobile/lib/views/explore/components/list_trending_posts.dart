import 'package:flutter/material.dart';
import 'package:mobile/views/home/components/post_card.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:sizer/sizer.dart';

class ListTrendingPosts extends StatelessWidget {
  const ListTrendingPosts({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverList(
      delegate: SliverChildListDelegate([
        Container(
          color: mySecondaryColor,
          padding: const EdgeInsets.symmetric(vertical: myPadding),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: myPadding),
                child: Text(
                  "What are people reading now?",
                  style: TextStyle(
                    color: myHeadlineColor,
                    fontFamily: 'Roboto',
                    fontWeight: FontWeight.w900,
                    fontSize: 24.sp,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: myPadding,
                  vertical: myPadding,
                ),
                child: Text(
                  "Explore the top trending.",
                  style: TextStyle(
                    color: mySubHeadlineColor.withOpacity(.7),
                    fontFamily: 'Roboto',
                    fontWeight: FontWeight.w500,
                    fontSize: 16.sp,
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(
                  vertical: myPadding / 2,
                ),
                child: SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      ...posts
                          .map((e) => PostCard(
                                style: PostCardStyle.portrait,
                                post: e,
                              ))
                          .toList(),
                      const SizedBox(width: myPadding),
                    ],
                  ),
                ),
              )
            ],
          ),
        )
      ]),
    );
  }
}
