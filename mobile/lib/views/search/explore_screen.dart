import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/search/components/list_recommended_authors.dart';
import 'package:mobile/views/search/components/search_app_bar.dart';
import 'package:mobile/views/search/components/search_box_and_tags.dart';
import 'package:mobile/views/search/components/search_recommend_list.dart';
import 'package:sizer/sizer.dart';

class SearchScreen extends StatelessWidget {
  const SearchScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: [
        const SearchAppBar(),
        const SearchBoxAndTags(),
        const SearchRecommendList(),
        const ListRecommendedAuthors(),
        SliverList(
          delegate: SliverChildListDelegate([
            Container(
              color: myParagraphColor,
              padding: const EdgeInsets.symmetric(vertical: myPadding),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: myPadding),
                    child: Text(
                      "What are people reading now?",
                      style: TextStyle(
                        color: myBackgroundColor,
                        fontFamily: 'Roboto',
                        fontWeight: FontWeight.w900,
                        fontSize: 24.sp,
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: myPadding,
                      vertical: myPadding / 2,
                    ),
                    child: Text(
                      "Explore the top trending.",
                      style: TextStyle(
                        color: myMainColor.withOpacity(.7),
                        fontFamily: 'Roboto',
                        fontWeight: FontWeight.w500,
                        fontSize: 16.sp,
                      ),
                    ),
                  ),
                  // Row(
                  //   mainAxisAlignment: MainAxisAlignment.start,
                  //   children: [
                  //     ...posts
                  //         .map((e) => Padding(
                  //               padding: const EdgeInsets.only(left: myPadding),
                  //               child: Column(
                  //                 crossAxisAlignment: CrossAxisAlignment.start,
                  //                 children: [
                  //                   Flexible(
                  //                     flex: 1,
                  //                     child: Image.asset(
                  //                       e.image,
                  //                       fit: BoxFit.scaleDown,
                  //                     ),
                  //                   ),

                  //                 ],
                  //               ),
                  //             ))
                  //         .toList(),
                  //     const SizedBox(width: myPadding),
                  //   ],
                  // )
                ],
              ),
            )
          ]),
        ),
      ],
    );
  }
}
