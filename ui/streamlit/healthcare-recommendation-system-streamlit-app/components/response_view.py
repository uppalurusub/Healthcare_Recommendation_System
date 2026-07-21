import streamlit as st


def display_response(result):
    """Display recommendation response in a professional dashboard."""

    if not result:
        st.warning("No response received.")
        return

    # ==========================================================
    # Header
    # ==========================================================
    st.markdown("# 🏥 Healthcare Recommendation Report")
    st.caption("AI Generated Clinical Recommendation")

    st.divider()

    # ==========================================================
    # Patient Profile
    # ==========================================================
    profile = result.get("patient_profile", {})

    st.markdown("## 👤 Patient Profile")

    col1, col2, col3 = st.columns(3)

    with col1:
        st.metric(
            "Age",
            profile.get("age", "N/A")
        )

    with col2:
        st.metric(
            "Gender",
            profile.get("gender", "N/A")
        )

    with col3:
        st.metric(
            "Recommendations",
            len(result.get("recommendations", []))
        )

    if profile.get("profile_text"):
        st.info(profile["profile_text"])

    st.divider()

    # ==========================================================
    # Recommendations
    # ==========================================================
    recommendations = result.get("recommendations", [])

    st.markdown("## 🏥 Personalized Treatment Recommendations")

    if not recommendations:
        st.warning("No recommendations available.")
        return

    for idx, rec in enumerate(recommendations, start=1):

        with st.expander(
            f"Recommendation {idx} • {rec.get('disease','Unknown')}",
            expanded=True
        ):

            c1, c2, c3 = st.columns(3)

            with c1:
                st.markdown("#### 🩺 Disease")
                st.success(rec.get("disease", "N/A"))

            with c2:
                st.markdown("#### 💊 Treatment")
                st.success(
                    rec.get(
                        "recommended_treatment",
                        "N/A"
                    )
                )

            with c3:
                st.markdown("#### 🥗 Diet Plan")
                st.success(
                    rec.get(
                        "diet_plan",
                        "N/A"
                    )
                )

            st.markdown("---")

            st.markdown("### 🏃 Lifestyle Changes")

            lifestyle = rec.get(
                "lifestyle_changes",
                []
            )

            if lifestyle:

                cols = st.columns(2)

                for i, item in enumerate(lifestyle):

                    with cols[i % 2]:
                        st.markdown(
                            f"""
<div style="
padding:12px;
margin-bottom:10px;
border-left:6px solid #4CAF50;
background:#F5FFF5;
border-radius:8px;
">
✅ {item}
</div>
""",
                            unsafe_allow_html=True
                        )

            else:
                st.info("No lifestyle recommendations.")

            st.markdown("---")

            st.markdown("### 📅 Follow-up")

            st.warning(
                rec.get(
                    "follow_up",
                    "No follow-up suggested."
                )
            )

    st.divider()

    # ==========================================================
    # Download JSON
    # ==========================================================
    import json

    st.download_button(
        "📥 Download Recommendation",
        data=json.dumps(result, indent=4),
        file_name="recommendation.json",
        mime="application/json",
        use_container_width=True,
    )